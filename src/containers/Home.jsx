import React from "react";
import Products from "@components/Products";
import { Helmet } from "react-helmet";

function Home() {
  return (
    <>
      <Helmet>
        <title>Platzi conf Merch- Productos</title>
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@SiteUser" />
        <meta name="twitter:creator" content="@CreatorUser" />
        <meta name="twitter:title" content="Conf Store" />
        <meta name="twitter:description" content="Conf Store" />
        <meta name="twitter:image" content="url_img" />
        <meta property="og:title" content="Conf Store" />
        <meta property="og:description" content="Conf Store" />
        <meta property="og:image" content="url_img" />
        <meta property="og:url" content="reactshop-portafolio.quest" />
        <meta property="og:site_name" content="Conf Store" />
        <meta property="og:locale" content="es_ES" />
        <meta property="og:type" content="article" />
        <meta property="fb:app_id" content="ID_APP_FACEBOOK" />
      </Helmet>
      <Products />
    </>
  );
}

export default Home;
