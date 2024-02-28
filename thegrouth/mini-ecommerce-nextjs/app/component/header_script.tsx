import Link from "next/link";

export default function HeaderScript() {
    return (
        <head>
            <link rel="icon" href="%PUBLIC_URL%/favicon.ico" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <meta name="theme-color" content="#000000" />
            <meta name="description" content="Web site created using create-nextjs-app" />
            <title>Ecommerce & Todo App</title>        
            <link rel="stylesheet" type="text/css" href="./css/bootstrap.min.css" />
            <link rel="stylesheet" type="text/css" href="./css/style.css" />
            <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/Swiper/11.0.5/swiper-bundle.css" />
            <link rel="preconnect" href="https://fonts.googleapis.com/" />
            <link rel="preconnect" href="https://fonts.gstatic.com/"/>
            <link href="https://fonts.googleapis.com/css2?family=Jost:wght@300;400;500&amp;family=Lato:wght@300;400;700&amp;display=swap" rel="stylesheet" />
            <script src="js/modernizr.js"></script>
      </head>
    );
  }
  