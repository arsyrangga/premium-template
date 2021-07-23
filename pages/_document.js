// _document is only rendered on the server side and not on the client side
// Event handlers like onClick can't be added to this file

// ./pages/_document.js
import Document, { Html, Head, Main, NextScript } from "next/document";

export default class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html>
        <Head>
          <link
            rel="stylesheet"
            href="https://use.fontawesome.com/releases/v5.13.0/css/all.css"
            integrity="sha384-Bfad6CLCknfcloXFOyFnlgtENryhrpZCe29RTifKEixXQZ38WheV+i/6YWSzkz3V"
            crossorigin="anonymous"
          />

          <meta charset="utf-8" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1, shrink-to-fit=no"
          />
          <title>Serein Admin</title>

          <link
            rel="stylesheet"
            href="/vendors/iconfonts/mdi/font/css/materialdesignicons.min.css"
          />
          <link rel="stylesheet" href="/vendors/css/vendor.bundle.base.css" />
          <link rel="stylesheet" href="/vendors/css/vendor.bundle.addons.css" />

          <link rel="stylesheet" href="/css/vertical-layout-light/style.css" />
          <link rel="shortcut icon" href="/images/favicon.png" />
          <link
            rel="stylesheet"
            href="/vendors/summernote/dist/summernote-bs4.css"
          />
          <link rel="manifest" href="/manifest.json" />
        </Head>
        <body className="aidebar-fixed">
          <Main />
          <script src="/vendors/js/vendor.bundle.addons.js"></script>
          <script src="/vendors/js/vendor.bundle.base.js"></script>
          <script src="/js/off-canvas.js"></script>
          <script src="/js/settings.js"></script>
          <script src="/js/templates.js"></script>
          <script src="/js/todolist.js"></script>
          <script src="/js/dashboard.js"></script>
          <script src="/js/editorDemo.js"></script>
          <script src="/vendors/tinymce/tinymce.min.js"></script>
          <script src="/vendors/tinymce/themes/modern/theme.js"></script>
          <script src="/vendors/summernote/dist/summernote-bs4.min.js"></script>
          <script src=""></script>

          <NextScript />
        </body>
      </Html>
    );
  }
}
