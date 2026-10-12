export interface HorarioDia {
  dia: string;
  diaSemana: number; // 0 = Domingo, 1 = Segunda, ..., 6 = Sábado
  abertura: string;  // Formato "09:00"
  fechamento: string; // Formato "18:00"
  aberto: boolean;
}

export interface Servico {
  id: string;
  codigo: string;
  titulo: string;
  descricao: string;
  preco: string;
  prazo: string;
  icone: string;
}

export interface Metrica {
  codigo: string;
  titulo: string;
  descricao: string;
  icone: string;
}

export interface Passo {
  numero: string;
  tempo: string;
  tag: string;
  titulo: string;
  descricao: string;
  icone: string;
}

export interface Avaliacao {
  autor: string;
  iniciais: string;
  qualificacao: string;
  nota: number;
  texto: string;
  verificado: boolean;
}

export interface FAQ {
  id: string;
  pergunta: string;
  resposta: string;
}

export interface RedeSocial {
  nome: string;
  url: string;
  icone: string;
}

export interface EmpresaConfig {
  nome: string;
  sufixo: string;
  tagline: string;
  razaoSocial: string;
  cnpj: string;
  inscricaoMunicipal: string;
  slogan: string;
  sloganDestaque: string;
  subtitulo: string;
  descricaoCompleta: string;
  telefoneFormatado: string;
  telefoneRaw: string;
  telefoneLink: string;
  whatsappNumero: string;
  whatsappTextoPadrao: string;
  email: string;
  enderecoLinha1: string;
  enderecoLinha2: string;
  bairro: string;
  cidade: string;
  estado: string;
  cep: string;
  coordenadasTexto: string;
  latitude: number;
  longitude: number;
  googleMapsUrl: string;
  googleMapsEmbedUrl: string;
  googleReviewsUrl: string;
  notaMedia: number;
  totalAvaliacoes: number;
  tempoMedioResposta: string;
  tempoMercado: string;
  anosMercadoNumero: number;
  anoFundacao: number;
  fusoHorario: string; // Ex: "America/Sao_Paulo" ou "Europe/Madrid"
  idioma: string; // "pt-BR"
  dominio: string; // "https://guarujatec.com.br"
  schemaType: string; // "LocalBusiness" ou "AutoRepair"
}

export const TALLER_DATA: {
  empresa: EmpresaConfig;
  horarios: HorarioDia[];
  metricasConfianca: Metrica[];
  servicos: Servico[];
  passos: Passo[];
  avaliacoes: Avaliacao[];
  faqs: FAQ[];
  redesSociais: RedeSocial[];
} = {
  empresa: {
    nome: "GUARUJA",
    sufixo: "TEC",
    tagline: "MARKETING & AUTOMAÇÃO",
    razaoSocial: "GUARUJA TEC SOLUÇÕES DIGITAIS LTDA",
    cnpj: "38.291.802/0001-94",
    inscricaoMunicipal: "GUARUJÁ-SP",
    slogan: "Aumente suas vendas em até 3x com nossa solução simples",
    sloganDestaque: "em até 3x",
    subtitulo: "Marketing Digital e Automação de Bairro sem surpresas no valor.",
    descricaoCompleta: "Atendendo comércios e prestadores de serviço na Enseada e em todo o Guarujá com anos de experiência no mercado regional. Soluções práticas, sem jargões e com foco exclusivo em colocar clientes reais no seu balcão e no seu WhatsApp.",
    telefoneFormatado: "(13) 99132-7284",
    telefoneRaw: "5513991327284",
    telefoneLink: "tel:13991327284",
    whatsappNumero: "5513991327284",
    whatsappTextoPadrao: "Olá, gostaria de agendar um horário com a Guaruja Tec",
    email: "contato@guarujatec.com.br",
    enderecoLinha1: "R. Orlando Falcão, 456",
    enderecoLinha2: "Enseada, Guarujá - SP",
    bairro: "Enseada",
    cidade: "Guarujá",
    estado: "SP",
    cep: "11443-400",
    coordenadasTexto: "COORD_LOCAL: -23.9780° S, -46.2255° W",
    latitude: -23.9780,
    longitude: -46.2255,
    googleMapsUrl: "https://maps.google.com/?q=Rua+Orlando+Falcao+456+Enseada+Guaruja+SP",
    googleMapsEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3646.0!2d-46.2255!3d-23.9780!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjPCsDU4JzQwLjgiUyA0NsKwMTMnMzEuOCJX!5e0!3m2!1spt-BR!2sbr!4v1",
    googleReviewsUrl: "https://maps.google.com",
    notaMedia: 4.7,
    totalAvaliacoes: 128,
    tempoMedioResposta: "3 MINUTOS",
    tempoMercado: "20 ANOS DE MERCADO",
    anosMercadoNumero: 20,
    anoFundacao: 2004,
    fusoHorario: "America/Sao_Paulo",
    idioma: "pt-BR",
    dominio: "https://guarujatec.com.br",
    schemaType: "LocalBusiness"
  },
  horarios: [
    { dia: "Segunda-feira", diaSemana: 1, abertura: "09:00", fechamento: "18:00", aberto: true },
    { dia: "Terça-feira", diaSemana: 2, abertura: "09:00", fechamento: "18:00", aberto: true },
    { dia: "Quarta-feira", diaSemana: 3, abertura: "09:00", fechamento: "18:00", aberto: true },
    { dia: "Quinta-feira", diaSemana: 4, abertura: "09:00", fechamento: "18:00", aberto: true },
    { dia: "Sexta-feira", diaSemana: 5, abertura: "09:00", fechamento: "18:00", aberto: true },
    { dia: "Sábado", diaSemana: 6, abertura: "09:00", fechamento: "18:00", aberto: true },
    { dia: "Domingo", diaSemana: 0, abertura: "00:00", fechamento: "00:00", aberto: false }
  ],
  metricasConfianca: [
    {
      codigo: "01 // TRAJETÓRIA",
      titulo: "20 ANOS DE MERCADO",
      descricao: "Tradição sólida e presença física comprovada no comércio do litoral paulista.",
      icone: "verified"
    },
    {
      codigo: "02 // SEGURANÇA",
      titulo: "GARANTIA POR ESCRITO",
      descricao: "Escopo de trabalho 100% blindado e documentado antes do início de qualquer tarefa.",
      icone: "description"
    },
    {
      codigo: "03 // VERSATILIDADE",
      titulo: "TODAS AS MARCAS",
      descricao: "Atendimento do pequeno comércio e clínicas à indústria e redes de serviços locais.",
      icone: "store"
    },
    {
      codigo: "04 // TRANSPARÊNCIA",
      titulo: "SEM COMPROMISSO",
      descricao: "Diagnóstico inicial transparente e raio-x completo do seu posicionamento sem custos.",
      icone: "calculate"
    }
  ],
  servicos: [
    {
      id: "criacao-sites",
      codigo: "SRV-01 // WEB",
      titulo: "Criação de Sites Profissionais",
      descricao: "Sites rápidos, responsivos e otimizados para busca local do Google.",
      preco: "A partir de R$ 980",
      prazo: "5 a 10 dias úteis",
      icone: "language"
    },
    {
      id: "automacao-whatsapp",
      codigo: "SRV-02 // BOT",
      titulo: "Automação WhatsApp",
      descricao: "Robôs inteligentes que respondem clientes 24/7 e filtram pedidos.",
      preco: "A partir de R$ 450",
      prazo: "48 horas",
      icone: "smart_toy"
    },
    {
      id: "loja-virtual",
      codigo: "SRV-03 // SHOP",
      titulo: "Loja Virtual & Catálogo",
      descricao: "E-commerce simplificado com Pix automático e checkout sem atrito.",
      preco: "A partir de R$ 1.400",
      prazo: "10 a 15 dias úteis",
      icone: "shopping_bag"
    },
    {
      id: "gestao-leads",
      codigo: "SRV-04 // ADS",
      titulo: "Gestão de Leads & Tráfego",
      descricao: "Campanhas no Google e Meta para o raio geográfico do Guarujá.",
      preco: "A partir de R$ 600/mês",
      prazo: "Configuração: 72 horas",
      icone: "campaign"
    },
    {
      id: "captacao-clientes",
      codigo: "SRV-05 // FUNIL",
      titulo: "Captação de Clientes",
      descricao: "Estruturação de funil direto para o balcão e WhatsApp da loja.",
      preco: "A partir de R$ 550",
      prazo: "3 a 5 dias úteis",
      icone: "filter_alt"
    },
    {
      id: "processos-ia",
      codigo: "SRV-06 // IA",
      titulo: "Processos com IA",
      descricao: "Inteligência artificial para orçamentos e follow-up automático.",
      preco: "A partir de R$ 750",
      prazo: "5 dias úteis",
      icone: "psychology"
    },
    {
      id: "google-meu-negocio",
      codigo: "SRV-07 // MAPS",
      titulo: "Google Meu Negócio",
      descricao: "Coloque sua empresa nas 3 primeiras posições do mapa em Guarujá.",
      preco: "A partir de R$ 390",
      prazo: "24 a 48 horas",
      icone: "pin_drop"
    },
    {
      id: "suporte-continuo",
      codigo: "SRV-08 // SLA",
      titulo: "Suporte Contínuo",
      descricao: "Segurança, backups semanais e ajustes técnicos rápidos sem burocracia.",
      preco: "A partir de R$ 250/mês",
      prazo: "SLA: No mesmo dia",
      icone: "build"
    }
  ],
  passos: [
    {
      numero: "PASSO 01",
      tempo: "TEMPO: 1 MINUTO",
      tag: "TRIAGEM INSTANTÂNEA",
      titulo: "Você solicita o diagnóstico pelo WhatsApp",
      descricao: "Envie os dados básicos da sua empresa e suas principais dificuldades atuais em menos de 1 minuto sem formulários extensos.",
      icone: "bolt"
    },
    {
      numero: "PASSO 02",
      tempo: "ALINHAMENTO",
      tag: "ORÇAMENTO 100% TRAVADO",
      titulo: "Entramos em contato antes de começar",
      descricao: "Nossa equipe técnica liga ou envia mensagem detalhando o escopo exato e o valor fixado. Sem letras miúdas ou cobranças extras posteriores.",
      icone: "lock"
    },
    {
      numero: "PASSO 03",
      tempo: "ENTREGA",
      tag: "PLANO OPERACIONAL EM MÃOS",
      titulo: "Reunião de apresentação do relatório",
      descricao: "Apresentamos o raio-x completo do seu posicionamento no Guarujá e o plano prático de execução imediata para validar resultados.",
      icone: "done_all"
    }
  ],
  avaliacoes: [
    {
      autor: "Marcos Vinicius",
      iniciais: "MV",
      qualificacao: "Comerciante em Enseada",
      nota: 5,
      texto: "“A Guaruja Tec revolucionou o atendimento da nossa loja. A automação no WhatsApp começou a responder os clientes à noite e as vendas dobraram em duas semanas.”",
      verificado: true
    },
    {
      autor: "Dra. Camila Silveira",
      iniciais: "CS",
      qualificacao: "Clínica Odontológica Guarujá",
      nota: 5,
      texto: "“Profissionalismo raro de encontrar. Cumpriram o prazo rigorosamente, sem enrolação e com suporte impecável pelo WhatsApp.”",
      verificado: true
    },
    {
      autor: "Roberto Almeida",
      iniciais: "RA",
      qualificacao: "Oficina & Auto Peças Pitangueiras",
      nota: 5,
      texto: "“Preço justo e sem surpresas. O orçamento que passaram foi exatamente o que paguei, e as ligações pelo Google Meu Negócio aumentaram de imediato.”",
      verificado: true
    }
  ],
  faqs: [
    {
      id: "faq-1",
      pergunta: "1. Como funciona o orçamento fechado antes de iniciar o serviço?",
      resposta: "Detalhamos cada item contratado em proposta técnica formal. O valor acordado na assinatura é exatamente o valor final pago, sem surpresas, taxas ocultas ou alterações unilaterais."
    },
    {
      id: "faq-2",
      pergunta: "2. Preciso ter conhecimento de tecnologia para usar as automações?",
      resposta: "Não. Toda a infraestrutura e configuração são realizadas pela Guaruja Tec. Entregamos o sistema 100% testado e funcional, acompanhado de um treinamento prático e direto de 15 minutos para você e sua equipe."
    },
    {
      id: "faq-3",
      pergunta: "3. Quanto tempo leva para começar a receber novos contatos e clientes?",
      resposta: "Campanhas locais direcionadas e automações para WhatsApp entram em operação ativa entre 24 a 72 horas após a aprovação formal do escopo pelo cliente."
    },
    {
      id: "faq-4",
      pergunta: "4. Vocês atendem apenas empresas do Guarujá?",
      resposta: "Nosso foco principal e presencial é o comércio e serviços da Enseada, Pitangueiras, Vicente de Carvalho e toda a Baixada Santista, mas nossa estrutura técnica atende projetos remotos em todo o Brasil com o mesmo rigor."
    },
    {
      id: "faq-5",
      pergunta: "5. O que está incluído na reunião de apresentação do relatório gratuito?",
      resposta: "Uma auditoria completa da presença digital do seu negócio, comparação com os 3 principais concorrentes no seu raio geográfico e um mapa com oportunidades de automação imediata para reduzir custos operacionais."
    },
    {
      id: "faq-6",
      pergunta: "6. Quais são as formas de pagamento disponíveis?",
      resposta: "Parcelamento em até 12x no cartão de crédito, Pix à vista com condição diferenciada e boleto bancário para contratos contínuos de suporte e manutenção técnica."
    }
  ],
  redesSociais: [
    { nome: "Instagram", url: "https://instagram.com", icone: "share" },
    { nome: "WhatsApp", url: "https://wa.me/5513991327284", icone: "chat" },
    { nome: "Telefone", url: "tel:13991327284", icone: "call" }
  ]
};
