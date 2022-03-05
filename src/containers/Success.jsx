import React, { useContext, lazy, Suspense } from "react";
import AppContext from "@context/AppContext";
// import Map from "@components/Map";
import useGoogleAdress from "@hooks/useGoogleAddress";
import "@styles/components/Success.css";
// eslint-disable-next-line no-import-assign
const Map = lazy(() => import(/* webpackChunkName: "Map" */ "@components/Map"));

function Success() {
  const { state } = useContext(AppContext);
  const { buyer } = state;
  const location = useGoogleAdress(buyer[0].address);
  return (
    <div className="Succes">
      <div className="Success-content">
        <h2>{buyer.name},Gracias por tu compra</h2>
        <span>Tu pedido llegara en 3 dias a tu dirección:</span>
        <div className="Success-map">
          <Suspense fallback={<h2>Cargando...</h2>}>
            <Map data={location} />
          </Suspense>
        </div>
      </div>
    </div>
  );
}

export default Success;
