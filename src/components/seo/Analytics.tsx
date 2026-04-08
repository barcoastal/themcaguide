import Script from "next/script";

const GA_ID = "G-342N6EZ8X2";

export default function Analytics() {

  return (
    <>
      <Script src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`} strategy="afterInteractive" />
      <Script id="ga4" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${GA_ID}');

          document.addEventListener('click', function(e) {
            var link = e.target.closest('[data-affiliate="true"]');
            if (link) {
              gtag('event', 'affiliate_click', {
                link_url: link.href,
                link_text: link.textContent,
              });
            }
          });
        `}
      </Script>
    </>
  );
}
