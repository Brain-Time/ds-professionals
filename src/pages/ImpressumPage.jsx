import { Helmet } from 'react-helmet-async';
import SectionWrapper from '../components/ui/SectionWrapper';

const ImpressumPage = () => (
  <>
    <Helmet>
      <title>Impressum – D&S Professionals</title>
      <meta name="robots" content="noindex, nofollow" />
    </Helmet>
    <SectionWrapper className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <h1 className="text-3xl font-extrabold text-[#0D1B2A] dark:text-white mb-8">
        Impressum
      </h1>
      <div className="prose prose-slate dark:prose-invert max-w-none space-y-6 text-slate-600 dark:text-slate-300">
        <section>
          <h2 className="text-xl font-bold text-[#0D1B2A] dark:text-white mb-3">Angaben gemäß § 5 TMG</h2>
          <p>D&S Professionals<br />Wicherstr. 19<br />76185 Karlsruhe</p>
        </section>
        <section>
          <h2 className="text-xl font-bold text-[#0D1B2A] dark:text-white mb-3">Kontakt</h2>
          <p>
            Telefon: <a href="tel:+4917914555532" className="text-[#1B4FD8] hover:underline">+49 179 1455532</a><br />
            E-Mail: <a href="mailto:info@ds-professionals.de" className="text-[#1B4FD8] hover:underline">info@ds-professionals.de</a>
          </p>
        </section>
        <section>
          <h2 className="text-xl font-bold text-[#0D1B2A] dark:text-white mb-3">Verantwortlich für den Inhalt</h2>
          <p>Abdourazaki Derman<br />Wicherstr. 19<br />76185 Karlsruhe</p>
        </section>
        <section>
          <h2 className="text-xl font-bold text-[#0D1B2A] dark:text-white mb-3">Haftungsausschluss</h2>
          <p>Die Inhalte unserer Seiten wurden mit größter Sorgfalt erstellt. Für die Richtigkeit, Vollständigkeit und Aktualität der Inhalte können wir jedoch keine Gewähr übernehmen.</p>
        </section>
      </div>
    </SectionWrapper>
  </>
);

export default ImpressumPage;
