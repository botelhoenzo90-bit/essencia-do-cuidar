import { createFileRoute } from "@tanstack/react-router";
import { Children, type ReactNode } from "react";
import { ArrowUpRight, Baby, Brain, CheckCircle2, ChevronDown, Clock3, HeartHandshake, Leaf, MapPin, MessageCircle, Moon, ShieldCheck, Sparkles, UsersRound } from "lucide-react";
import logoEssencia from "@/assets/logo-essencia-do-cuidar.png";
import whatsappIcon from "@/assets/whatsapp-icon.png.asset.json";
import childImage from "@/assets/child.jpg";
import clinicImage from "@/assets/clinic.jpg";
import individualImage from "@/assets/esp-ginecologia.jpg";
import seniorImage from "@/assets/esp-neurologia.jpg";
import nutritionImage from "@/assets/esp-nutricao.jpg";
import coupleImage from "@/assets/esp-clinico.jpg";
import familyImage from "@/assets/esp-ortopedia.jpg";
import "../essencia-final.css";
import "../essencia-redesign.css";

export const Route = createFileRoute("/")({ component: Index, head: () => ({ meta: [
  { title: "Essência do Cuidar | Psicologia em Jaru" },
  { name: "description", content: "Clínica de Psicologia e Autocuidado em Jaru-RO, com atendimento presencial e online para crianças, adolescentes, adultos, idosos, casais e famílias, além de acompanhamento nutricional." },
  { property: "og:title", content: "Essência do Cuidar | Psicologia em Jaru" },
  { property: "og:description", content: "Acolhimento psicológico e nutricional para todas as fases da vida, presencialmente em Jaru-RO e online." },
  { property: "og:type", content: "website" },
  { property: "og:image", content: "https://blank-canvas-spark-8818.lovable.app/__l5e/assets-v1/dfde3b6d-39f4-4669-91a0-c05913a42a8d/whatsapp-icon.png" },
  { name: "twitter:card", content: "summary_large_image" },
  { name: "twitter:image", content: "https://blank-canvas-spark-8818.lovable.app/__l5e/assets-v1/dfde3b6d-39f4-4669-91a0-c05913a42a8d/whatsapp-icon.png" },
] }) });

const wa = "https://wa.me/5569993783222?text=Ol%C3%A1!%20Quero%20agendar%20uma%20consulta%20na%20Ess%C3%AAncia%20do%20Cuidar.";
const mapUrl = "https://www.google.com/maps/search/?api=1&query=Essencia+do+Cuidar+Clinica+de+Psicologia+Jaru+RO";
const serviceImages = [
  individualImage,
  childImage,
  coupleImage,
  familyImage,
  seniorImage,
  nutritionImage,
];
const team = [
  ["Psicologia", "Dra. Helena Martins", "Psicóloga clínica com atendimento acolhedor e individualizado para diferentes fases da vida."],
  ["Psicologia", "Dra. Camila Duarte", "Atuação voltada ao cuidado emocional, autoconhecimento e construção de novas possibilidades."],
  ["Psicologia", "Dra. Mariana Alves", "Acompanhamento psicológico com escuta atenta, respeito à individualidade e vínculo terapêutico."],
  ["Nutrição", "Dra. Beatriz Almeida", "Nutricionista com olhar individualizado para hábitos, saúde e uma relação mais equilibrada com a alimentação."],
] as const;
const services = [
  [Brain, "Psicoterapia individual", "Um acompanhamento para compreender emoções, aliviar sobrecargas e construir caminhos possíveis no seu ritmo."],
  [Baby, "Infância e adolescência", "Cuidado sensível para emoções, comportamento, vínculos familiares e desafios próprios de cada fase."],
  [HeartHandshake, "Terapia de casal", "Escuta para melhorar o diálogo, compreender conflitos e fortalecer a conexão entre o casal."],
  [UsersRound, "Terapia familiar", "Um espaço mediado para acolher diferenças, reorganizar relações e fortalecer os vínculos da família."],
  [Moon, "Psicologia para idosos", "Apoio emocional diante de perdas, mudanças de rotina, solidão e novos sentidos para esta fase da vida."],
  [Leaf, "Nutrição e autocuidado", "Orientação respeitosa para hábitos possíveis, saúde e uma relação mais consciente com a alimentação."],
] as const;
const pains = [
  [Brain, "Ansiedade e preocupação", "Pensamentos acelerados, excesso de preocupação, tensão e dificuldade de desligar a mente."],
  [HeartHandshake, "Traumas e experiências difíceis", "Situações do passado podem continuar afetando emoções, relações e a forma como você se enxerga."],
  [ShieldCheck, "Baixa autoestima", "Insegurança, autocobrança, medo de julgamento e dificuldade de reconhecer o próprio valor."],
  [UsersRound, "Conflitos nos relacionamentos", "Discussões frequentes, distância emocional, dificuldade de diálogo ou problemas familiares."],
  [Leaf, "Emagrecimento e alimentação", "Dificuldade para manter hábitos, comer por ansiedade, desorganização alimentar ou desejo de emagrecer com acompanhamento."],
  [Moon, "Luto e mudanças de vida", "Momentos de perda, separações, mudanças familiares, aposentadoria e outras transições podem exigir apoio."],
] as const;
const audiences = [
  [Baby, "Crianças e adolescentes", "Cuidado emocional respeitando o desenvolvimento e a individualidade de cada fase."],
  [Brain, "Adultos", "Apoio para questões emocionais, profissionais, pessoais e relacionamentos."],
  [HeartHandshake, "Casais", "Um espaço para diálogo, compreensão e fortalecimento da relação."],
  [UsersRound, "Famílias", "Cuidado para relações familiares que precisam de escuta e novas formas de convivência."],
  [Moon, "Idosos", "Acompanhamento para mudanças, perdas, solidão, autoestima e qualidade de vida emocional."],
  [Leaf, "Quem busca nutrição", "Acompanhamento para melhorar hábitos e construir uma relação mais equilibrada com a alimentação."],
] as const;
const reviews = [
  ["Mariana Silva", "Desde a primeira conversa me senti acolhida e respeitada. O atendimento me ajudou a entender melhor o que eu estava vivendo."],
  ["Carlos Mendes", "Um ambiente muito tranquilo e um atendimento que transmite confiança. Foi importante para mim ter esse espaço de escuta."],
  ["Ana Paula", "Minha filha se adaptou muito bem. A forma cuidadosa de conduzir o atendimento fez diferença para nossa família."],
  ["Fernanda Alves", "Comecei a terapia em um momento difícil e hoje consigo olhar para várias situações de outra maneira."],
  ["Juliana Costa", "O acompanhamento nutricional trouxe mais organização para minha rotina e uma relação mais consciente com a alimentação."],
] as const;
const faqs = ["Como funciona a primeira consulta?", "A clínica atende crianças e adolescentes?", "Vocês atendem casais e famílias?", "Como funciona a consulta com a nutricionista?", "O atendimento pode ser presencial e online?", "Como agendar uma consulta em Jaru-RO?"];

function Button({ children = "Agende sua consulta", href = wa, light = false }: { children?: ReactNode; href?: string; light?: boolean }) {
  return <a className={`ps-btn ${light ? "ps-btn-light" : ""}`} href={href} target={href.startsWith("http") ? "_blank" : undefined} rel={href.startsWith("http") ? "noreferrer" : undefined}><MessageCircle size={17} />{children}<ArrowUpRight size={15} /></a>;
}
function Title({ eyebrow, title, sub }: { eyebrow: string; title: string; sub: string }) {
  return <div className="ps-section-title"><span className="section-eyebrow"><Sparkles size={14} />{eyebrow}</span><h2>{title}</h2><p>{sub}</p></div>;
}
function Marquee({ children, label, duration = 42 }: { children: ReactNode; label: string; duration?: number }) {
  const items = Children.toArray(children);
  return <div className="marquee" aria-label={label}><div className="marquee-track" style={{ ["--marquee-duration" as string]: `${duration}s` }}>{items}{items.map((x, i) => <div key={i} style={{ display: "contents" }} aria-hidden="true">{x}</div>)}</div></div>;
}

function Index() {
  return <div className="ps-page">
    <main>
      <section id="inicio" className="ps-hero">
        <div className="hero-copy">
          <img className="hero-logo" src={logoEssencia} alt="Essência do Cuidar — Consultório de Psicologia e Autocuidado" />
          <h1>Cuide da sua <em>mente, emoções e bem-estar.</em></h1>
          <p>Psicologia como principal cuidado, com acolhimento e acompanhamento profissional para crianças, adolescentes, adultos, idosos, casais e famílias. Também contamos com atendimento nutricional.</p>
          <div className="hero-location"><span><MapPin size={15} />Jaru – RO</span><span><HeartHandshake size={15} />Presencial e online</span></div>
          <div className="hero-actions"><Button>Agende sua consulta</Button><Button light href="#como-funciona">Entenda como funciona</Button></div>
          <div className="hero-trust"><span><CheckCircle2 /><b>Escuta acolhedora</b></span><span><CheckCircle2 /><b>Atendimento individualizado</b></span><span><CheckCircle2 /><b>Profissionais especializados</b></span></div>
        </div>
      </section>

      <section id="como-funciona" className="how-section">
        <Title eyebrow="Como funciona" title="Você não precisa saber por onde começar." sub="O primeiro passo é conversar. A partir do que você está vivendo, o profissional entende suas necessidades e orienta o melhor caminho de acompanhamento." />
        <div className="how-grid">
          <article className="how-card"><div className="how-number">01</div><h3>Conte o que está acontecendo</h3><p>Você terá um espaço seguro para falar sobre suas emoções, dificuldades, relações e objetivos.</p></article>
          <article className="how-card"><div className="how-number">02</div><h3>Entendemos suas necessidades</h3><p>O atendimento considera sua história, seu momento atual e aquilo que você deseja transformar.</p></article>
          <article className="how-card"><div className="how-number">03</div><h3>Construímos seu cuidado</h3><p>O acompanhamento é conduzido de forma individualizada, com respeito ao seu ritmo e às suas necessidades.</p></article>
        </div>
        <div className="section-cta"><Button>Quero dar o primeiro passo</Button></div>
      </section>

      <section id="especialidades" className="ps-section">
        <Title eyebrow="Nossos atendimentos" title="Psicologia, terapia e nutrição para diferentes necessidades" sub="Conheça os principais atendimentos da Essência do Cuidar e encontre o cuidado que faz sentido para o seu momento." />
        <Marquee label="Nossos atendimentos" duration={24}>
          {services.map(([Icon, name, text], i) => <article className="specialty-card" key={name}><div className="specialty-visual"><img src={serviceImages[i]} alt={name} loading="lazy" /><span>{String(i + 1).padStart(2, "0")}</span><div className="card-icon"><Icon /></div></div><div className="specialty-body"><h3>{name}</h3><p>{text}</p><a href={wa} target="_blank" rel="noreferrer">Agendar este atendimento <ArrowUpRight size={15} /></a></div></article>)}
        </Marquee>
        <div className="section-cta"><Button>Agendar pelo WhatsApp</Button></div>
      </section>

      <section className="pain-section">
        <Title eyebrow="Como podemos ajudar" title="Um cuidado pensado para você" sub="Talvez você esteja passando por algo que não sabe como resolver sozinho. A terapia pode ser um espaço para compreender o que acontece e buscar novas formas de lidar com isso." />
        <div className="pain-grid">{pains.map(([Icon, title, text]) => <article className="pain-card" key={title}><div className="pain-icon"><Icon /></div><h3>{title}</h3><p>{text}</p></article>)}</div>
        <div className="section-cta"><Button>Conversar sobre meu momento</Button></div>
      </section>

      <section id="equipe" className="team-section">
        <Title eyebrow="Nossa equipe" title="Profissionais para acompanhar você" sub="Uma equipe multidisciplinar com foco em acolhimento, escuta e cuidado individualizado." />
        <div className="team-grid">{team.map(([role, title, text]) => <article className="team-card" key={title}><div className="team-photo-placeholder" aria-label="Foto profissional em breve"><UsersRound size={42} /><span>Foto em breve</span></div><div className="team-card-body"><div className="team-role">{role}</div><h3>{title}</h3><p>{text}</p><a href={wa} target="_blank" rel="noreferrer">Agendar atendimento <ArrowUpRight size={14} /></a></div></article>)}</div>
        <div className="section-cta"><Button>Falar com nossa equipe</Button></div>
      </section>

      <section id="publico" className="audience">
        <div className="audience-grid"><div className="audience-copy"><span className="section-eyebrow">Para quem é</span><h2>Cada fase da vida merece um cuidado diferente.</h2><p>Atendemos diferentes públicos, sempre considerando a história, a rotina e as necessidades de cada pessoa, casal ou família.</p><Button>Encontrar meu atendimento</Button></div><div className="audience-list">{audiences.map(([Icon, title, text]) => <div className="audience-item" key={title}><Icon /><div><b>{title}</b><small>{text}</small></div></div>)}</div></div>
        <div className="section-cta"><Button light>Quero agendar uma conversa</Button></div>
      </section>

      <section id="clinica" className="about">
        <div className="about-grid"><div className="about-photo"><img src={clinicImage} alt="Recepção acolhedora de uma clínica" loading="lazy" /></div><div className="about-copy"><span className="section-eyebrow">A Essência do Cuidar</span><h2>Um espaço para falar, compreender e cuidar.</h2><p>Em Jaru-RO, você encontra um ambiente reservado e acolhedor para cuidar da saúde emocional e do bem-estar. Cada conversa é conduzida com respeito à sua história, ao seu tempo e às suas necessidades.</p><div className="essencia-location"><span><MapPin size={15} />Jaru – RO</span><span><HeartHandshake size={15} />Presencial e online</span></div><div className="values"><div className="value"><HeartHandshake /><b>Acolhimento</b><small>Um espaço para ser ouvido.</small></div><div className="value"><ShieldCheck /><b>Privacidade</b><small>Cuidado com respeito.</small></div><div className="value"><Leaf /><b>Individualidade</b><small>Cada história importa.</small></div></div><Button>Agendar uma conversa</Button></div></div>
      </section>

      <section className="ps-banner"><div><span>COMECE PELO PRIMEIRO PASSO</span><h2>Você não precisa esperar tudo ficar difícil para pedir ajuda.</h2></div><Button light>Agendar minha consulta</Button></section>

      <section className="reviews"><Title eyebrow="Experiências" title="Um atendimento que começa com acolhimento" sub="Cuidado emocional é também ter um espaço onde você possa falar com segurança e respeito." /><Marquee label="Experiências de pacientes" duration={22}>{reviews.map(([name, text]) => <article className="review-card" key={name}><div className="review-top"><div className="avatar">{name.split(" ").map(x => x[0]).slice(0, 2).join("")}</div><div><b>{name}</b><div className="stars">★★★★★</div></div></div><p>“{text}”</p><div className="review-foot"><CheckCircle2 /> Essência do Cuidar</div></article>)}</Marquee><div className="section-cta"><Button>Quero ser atendido</Button></div></section>

      <section className="location-section" id="localizacao">
        <Title eyebrow="Onde estamos" title="Seu cuidado em Jaru-RO" sub="Atendimento presencial e online, com horário marcado. Consulte a localização e fale com a equipe para confirmar seu atendimento." />
        <div className="location-wrap"><div className="location-copy"><div className="contact-details"><span><MapPin size={18} />Jaru – RO</span><span><Clock3 size={18} />Atendimento com hora marcada</span><span><HeartHandshake size={18} />Presencial e online</span></div><div className="section-cta"><Button light>Agendar pelo WhatsApp</Button></div></div><div className="location-map"><iframe title="Localização da Essência do Cuidar em Jaru-RO" src={`https://www.google.com/maps?q=Essencia+do+Cuidar+Clinica+de+Psicologia+Jaru+RO&output=embed`} loading="lazy" referrerPolicy="no-referrer-when-downgrade" /></div></div>
      </section>

      <section id="duvidas" className="faq"><div className="faq-grid"><div className="faq-intro"><span className="section-eyebrow">Dúvidas frequentes</span><h2>Antes de começar, talvez você queira saber...</h2><p>Se sua dúvida não estiver aqui, nossa equipe pode orientar você pelo WhatsApp.</p><Button>Tirar minha dúvida</Button></div><div className="faq-list">{faqs.map((q, i) => <details key={q} open={i === 0}><summary>{q}<ChevronDown size={18} /></summary><p>{i === 0 ? "A primeira consulta é um momento de acolhimento e conversa. O profissional conhece sua demanda, entende o que você está vivendo e orienta o acompanhamento mais adequado." : i === 1 ? "Sim. A clínica atende crianças e adolescentes com uma abordagem adequada a cada fase do desenvolvimento." : i === 2 ? "Sim. Há atendimentos voltados para casais e famílias, sempre respeitando a dinâmica e as necessidades de cada caso." : i === 3 ? "A nutricionista avalia sua rotina, hábitos e objetivos para orientar um acompanhamento individualizado." : i === 4 ? "Sim. A Essência do Cuidar oferece atendimento presencial em Jaru-RO e também atendimento online." : "Entre em contato pelo WhatsApp para consultar horários e receber as orientações para agendamento."}</p></details>)}</div></div><div className="section-cta"><Button>Falar com a equipe</Button></div></section>

      <section id="contato" className="contact"><div className="contact-grid"><div className="contact-copy"><span className="section-eyebrow">Vamos conversar</span><h2>Dar o primeiro passo pode ser mais simples do que parece.</h2><p>Fale com nossa equipe pelo WhatsApp e veja os horários disponíveis para seu atendimento.</p><div className="contact-details"><span><MessageCircle size={18} />(69) 99378-3222</span><span><MapPin size={18} />Jaru – RO</span><span><Clock3 size={18} />Presencial e online</span></div><Button>Agende sua consulta</Button></div><div className="contact-card"><div className="contact-card-icon"><HeartHandshake /></div><h3>Essência do Cuidar</h3><p>Clínica de Psicologia e Autocuidado</p><b>Atendimento com hora marcada</b><a href={mapUrl} target="_blank" rel="noreferrer">Ver localização <ArrowUpRight size={15} /></a></div></div></section>
    </main>
    <footer className="footer"><div className="footer-grid"><div className="footer-brand"><h3>Essência do Cuidar</h3><p>Psicologia, nutrição e autocuidado com escuta, respeito e atenção à sua história.</p></div><div><h3>Atendimentos</h3><a href="#especialidades">Psicoterapia</a><a href="#especialidades">Casais e famílias</a><a href="#especialidades">Nutrição</a></div><div><h3>Encontre</h3><a href="#equipe">Nossa equipe</a><a href="#clinica">A clínica</a><a href="#duvidas">Dúvidas frequentes</a></div><div><h3>Contato</h3><a href={wa} target="_blank" rel="noreferrer"><MessageCircle size={15} />WhatsApp</a><a href={mapUrl} target="_blank" rel="noreferrer"><MapPin size={15} />Jaru – RO</a><span><Clock3 size={15} />Com hora marcada</span></div></div><div className="footer-bottom">© 2026 Essência do Cuidar <span>Psicologia e Autocuidado</span></div></footer>
    <a className="floating-wa" href={wa} target="_blank" rel="noreferrer" aria-label="Agendar pelo WhatsApp"><img src={whatsappIcon.url} alt="" aria-hidden="true" /></a>
  </div>;
}
