import { useEffect, useRef } from "react";
import { useMap } from "react-leaflet";
import L from "leaflet";
import "leaflet-routing-machine";

const RoutingMachine = ({ from, to, onRouteFound, onRoutingStart }) => {
  const map = useMap();
  const controlRef = useRef(null);
  const fromRef = useRef(null);
  const toRef = useRef(null);

  useEffect(() => {
    if (!from || !to) {
      if (controlRef.current) {
        try { map.removeControl(controlRef.current); } catch (_) { }
        controlRef.current = null;
      }
      return;
    }

    const fromChanged = !fromRef.current || !from.equals(fromRef.current);
    const toChanged = !toRef.current || !to.equals(toRef.current);

    if (!fromChanged && !toChanged) return;

    fromRef.current = from;
    toRef.current = to;

    if (controlRef.current) {
      try { map.removeControl(controlRef.current); } catch (_) { }
      controlRef.current = null;
    }

    onRoutingStart();

    const control = L.Routing.control({
      waypoints: [from, to],
      routeWhileDragging: false,
      addWaypoints: false,
      fitSelectedRoutes: true,
      show: false,
      draggableWaypoints: false,         // يمنع السحب
      waypointMode: "snap",
      lineOptions: {
        styles: [
          { color: "hsl(200, 90%, 50%)", opacity: 0.9, weight: 5 },
          { color: "hsl(200, 90%, 70%)", opacity: 0.3, weight: 9 },
        ],
        extendToWaypoints: true,
        missingRouteTolerance: 0,
      },
      router: L.Routing.osrmv1({
        serviceUrl: "https://router.project-osrm.org/route/v1",
        timeout: 10000,
      }),
    });

    control.on("routesfound", (e) => {
      const route = e.routes[0];
      if (!route) return;
      const distKm = (route.summary.totalDistance / 1000).toFixed(1);
      const totalMin = Math.round(route.summary.totalTime / 60);
      const hrs = Math.floor(totalMin / 60);
      const mins = totalMin % 60;
      const durationStr = hrs > 0 ? `${hrs}h ${mins}m` : `${mins} min`;
      onRouteFound(`${distKm} km`, durationStr);
    });

    control.on("routingerror", () => {
      onRouteFound("—", "—");
    });

    control.addTo(map);
    controlRef.current = control;

    return () => {
      if (controlRef.current) {
        try { map.removeControl(controlRef.current); } catch (_) { }
        controlRef.current = null;
      }
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [from, to]);

  return null;
};

export default RoutingMachine;