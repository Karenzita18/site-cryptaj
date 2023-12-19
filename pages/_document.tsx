import Document, {
	DocumentContext,
	DocumentInitialProps,
	Head,
	Html,
	Main,
	NextScript,
} from 'next/document';
import Script from 'next/script';

class MyDocument extends Document {
	static async getInitialProps(
		ctx: DocumentContext
	): Promise<DocumentInitialProps> {
		const initialProps = await Document.getInitialProps(ctx);
		return initialProps;
	}
	render() {
		return (
			<Html lang="pt-BR">
				<Head>
					<Script
						id="google-analytics"
						strategy="lazyOnload"
						dangerouslySetInnerHTML={{
							__html: `
              (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
              'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','GTM-TGHSQX2');`,
						}}
					/>
					<meta
						name="facebook-domain-verification"
						content="hx6cz12opwcuuu7bmrwamoclwbgdhp"
					/>
				</Head>
				<body>
					<noscript
						dangerouslySetInnerHTML={{
							__html: `<iframe src="https://www.googletagmanager.com/ns.html?id=GTM-TGHSQX2" height="0" width="0" style="display:none;visibility:hidden"></iframe>`,
						}}
					></noscript>
					<Main />
					<NextScript />
				</body>
			</Html>
		);
	}
}
export default MyDocument;
