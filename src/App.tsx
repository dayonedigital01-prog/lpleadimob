/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { 
  Search, 
  Instagram, 
  MessageCircle, 
  CheckCircle2, 
  TrendingUp, 
  Users, 
  MapPin, 
  ArrowRight,
  Building2,
  Calendar,
  ChevronDown,
  Plus,
  Sun,
  Wind
} from 'lucide-react';
import { motion } from 'motion/react';

function FAQItem({ question, answer }: { question: string, answer: string, key?: React.Key }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white transition-all">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="flex w-full items-center justify-between p-6 text-left transition-colors hover:bg-slate-50"
      >
        <span className="text-lg font-semibold text-slate-900">{question}</span>
        <ChevronDown 
          className={`text-slate-400 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} 
          size={20} 
        />
      </button>
      <div 
        className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}
      >
        <div className="border-t border-slate-100 p-6 text-slate-600 leading-relaxed">
          {answer}
        </div>
      </div>
    </div>
  );
}

function LeadForm() {
  const [formData, setFormData] = useState({
    nome: '',
    empresa: '',
    cidade: '',
    foco: 'Imoveis',
    equipe: '1',
    investimento: 'R$ 1.000 - R$ 3.000',
    experiencia: 'Nao'
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const message = `Olá! Gostaria de um diagnóstico gratuito.%0A%0A*Dados do Formulário:*%0A- *Nome:* ${formData.nome}%0A- *Empresa/Autônomo:* ${formData.empresa}%0A- *Cidade:* ${formData.cidade}%0A- *Foco:* ${formData.foco}%0A- *Equipe:* ${formData.equipe}%0A- *Investimento:* ${formData.investimento}%0A- *Já anuncia:* ${formData.experiencia}`;
    window.open(`https://wa.me/5544997068938?text=${message}`, '_blank');
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 rounded-3xl bg-white/10 p-6 backdrop-blur-md sm:p-8">
      <div className="grid gap-4 sm:grid-cols-2">
        <div className="space-y-1">
          <label className="text-xs font-bold uppercase tracking-wider text-indigo-200">Seu Nome</label>
          <input 
            required
            type="text" 
            placeholder="Ex: João Silva"
            className="w-full rounded-xl border-none bg-white/10 px-4 py-3 text-white placeholder:text-indigo-300/50 focus:ring-2 focus:ring-white/50"
            value={formData.nome}
            onChange={(e) => setFormData({...formData, nome: e.target.value})}
          />
        </div>
        <div className="space-y-1">
          <label className="text-xs font-bold uppercase tracking-wider text-indigo-200">Empresa / Profissional</label>
          <input 
            required
            type="text" 
            placeholder="Nome da sua empresa"
            className="w-full rounded-xl border-none bg-white/10 px-4 py-3 text-white placeholder:text-indigo-300/50 focus:ring-2 focus:ring-white/50"
            value={formData.empresa}
            onChange={(e) => setFormData({...formData, empresa: e.target.value})}
          />
        </div>
      </div>
      <div className="grid gap-4 sm:grid-cols-2">
        <div className="space-y-1">
          <label className="text-xs font-bold uppercase tracking-wider text-indigo-200">Cidade e Estado</label>
          <input 
            required
            type="text" 
            placeholder="Onde você atua?"
            className="w-full rounded-xl border-none bg-white/10 px-4 py-3 text-white placeholder:text-indigo-300/50 focus:ring-2 focus:ring-white/50"
            value={formData.cidade}
            onChange={(e) => setFormData({...formData, cidade: e.target.value})}
          />
        </div>
        <div className="space-y-1">
          <label className="text-xs font-bold uppercase tracking-wider text-indigo-200">Foco Principal</label>
          <select 
            className="w-full rounded-xl border-none bg-white/10 px-4 py-3 text-white focus:ring-2 focus:ring-white/50 [&>option]:text-slate-900"
            value={formData.foco}
            onChange={(e) => setFormData({...formData, foco: e.target.value})}
          >
            <option value="Imoveis">Imóveis (Venda/Locação)</option>
            <option value="Lancamentos">Lançamentos / Loteamentos</option>
            <option value="Outros">Outros</option>
          </select>
        </div>
      </div>
      <div className="grid gap-4 sm:grid-cols-2">
        <div className="space-y-1">
          <label className="text-xs font-bold uppercase tracking-wider text-indigo-200">Investimento Mensal Pretendido</label>
          <select 
            className="w-full rounded-xl border-none bg-white/10 px-4 py-3 text-white focus:ring-2 focus:ring-white/50 [&>option]:text-slate-900"
            value={formData.investimento}
            onChange={(e) => setFormData({...formData, investimento: e.target.value})}
          >
            <option value="R$ 1.000 - R$ 3.000">R$ 1.000 - R$ 3.000</option>
            <option value="R$ 3.000 - R$ 7.000">R$ 3.000 - R$ 7.000</option>
            <option value="R$ 7.000 - R$ 15.000">R$ 7.000 - R$ 15.000</option>
            <option value="Acima de R$ 15.000">Acima de R$ 15.000</option>
          </select>
        </div>
        <div className="space-y-1">
          <label className="text-xs font-bold uppercase tracking-wider text-indigo-200">Já investe em anúncios?</label>
          <select 
            className="w-full rounded-xl border-none bg-white/10 px-4 py-3 text-white focus:ring-2 focus:ring-white/50 [&>option]:text-slate-900"
            value={formData.experiencia}
            onChange={(e) => setFormData({...formData, experiencia: e.target.value})}
          >
            <option value="Nao">Ainda não</option>
            <option value="Sim - Pouco">Sim, mas pouco resultado</option>
            <option value="Sim - Escalar">Sim, quero escalar</option>
          </select>
        </div>
      </div>
      <button 
        type="submit"
        className="mt-4 flex w-full items-center justify-center gap-3 rounded-full bg-white px-8 py-4 text-lg font-bold text-indigo-600 shadow-lg transition-all hover:bg-indigo-50 active:scale-95"
      >
        <MessageCircle size={24} />
        Enviar e Falar no WhatsApp
      </button>
      <p className="text-center text-xs text-indigo-200/70">
        Seus dados estão seguros. Ao clicar, você será redirecionado para o WhatsApp.
      </p>
    </form>
  );
}

export default function App() {
  const scrollToContact = () => {
    const contactSection = document.getElementById('contato');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-white font-sans text-slate-900 selection:bg-indigo-100 selection:text-indigo-900">
      {/* Navigation */}
      <nav className="fixed top-0 z-50 w-full border-b border-slate-100 bg-white/80 backdrop-blur-md">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-indigo-600 text-white shadow-lg shadow-indigo-200">
              <TrendingUp size={24} />
            </div>
            <span className="text-xl font-bold tracking-tight text-slate-900">D1 Digital</span>
          </div>
          <button 
            onClick={scrollToContact}
            className="hidden rounded-full bg-indigo-600 px-6 py-2.5 text-sm font-semibold text-white transition-all hover:bg-indigo-700 hover:shadow-lg active:scale-95 sm:block"
          >
            Diagnóstico Gratuito
          </button>
        </div>
      </nav>

      <main className="pt-20">
        {/* 1. Hero Section */}
        <section className="relative overflow-hidden px-4 py-20 sm:px-6 lg:px-8 lg:py-32">
          <div className="absolute inset-0 -z-10 bg-[radial-gradient(45rem_50rem_at_top,theme(colors.indigo.50),white)]" />
          <div className="mx-auto max-w-7xl">
            <div className="grid items-center gap-12 lg:grid-cols-2">
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
              >
                <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-indigo-50 px-4 py-1.5 text-sm font-medium text-indigo-700">
                  <Building2 size={16} />
                  <span>Especialista em Marketing Imobiliário</span>
                </div>
                <h1 className="text-4xl font-extrabold tracking-tight text-slate-900 sm:text-6xl">
                  Receba contatos de pessoas interessadas em <span className="text-indigo-600">comprar imóveis</span> na sua cidade.
                </h1>
                <p className="mt-6 text-lg leading-8 text-slate-600">
                  Utilizamos estratégias avançadas de tráfego pago para atrair compradores qualificados e gerar oportunidades reais de venda para sua imobiliária ou carreira como corretor.
                </p>
                <div className="mt-10 flex flex-col gap-4 sm:flex-row">
                  <button 
                    onClick={scrollToContact}
                    className="flex items-center justify-center gap-2 rounded-full bg-indigo-600 px-8 py-4 text-lg font-bold text-white shadow-xl shadow-indigo-200 transition-all hover:bg-indigo-700 hover:shadow-indigo-300 active:scale-95"
                  >
                    Solicitar diagnóstico
                    <ArrowRight size={20} />
                  </button>
                  <button 
                    onClick={scrollToContact}
                    className="flex items-center justify-center gap-2 rounded-full border border-slate-200 bg-white px-8 py-4 text-lg font-semibold text-slate-700 transition-all hover:bg-slate-50 active:scale-95"
                  >
                    Falar no WhatsApp
                  </button>
                </div>
                <div className="mt-8 flex items-center gap-4 text-sm text-slate-500">
                  <div className="flex -space-x-2">
                    {[1, 2, 3, 4].map((i) => (
                      <img 
                        key={i}
                        src={`https://picsum.photos/seed/user${i}/64/64`} 
                        alt="Avatar" 
                        className="h-8 w-8 rounded-full border-2 border-white shadow-sm"
                        referrerPolicy="no-referrer"
                        loading="lazy"
                      />
                    ))}
                  </div>
                  <p>+150 empresas já aceleraram suas vendas</p>
                </div>
              </motion.div>
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="relative"
              >
                <div className="relative aspect-square overflow-hidden rounded-3xl bg-slate-100 shadow-2xl">
                  <img 
                    src="https://lh3.googleusercontent.com/d/18MKg3xri-DHobkBA0I87_yqbP5foOy0E=s1200" 
                    alt="Especialista D1 Digital" 
                    className="h-full w-full object-cover"
                    referrerPolicy="no-referrer"
                    fetchPriority="high"
                  />
                  <div className="absolute bottom-6 left-6 right-6 rounded-2xl bg-white/90 p-4 shadow-lg backdrop-blur-sm">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-xs font-bold uppercase tracking-wider text-indigo-600">Novo Lead Recebido</p>
                        <p className="text-sm font-semibold text-slate-900">Interesse: Consultoria Especializada</p>
                      </div>
                      <div className="rounded-full bg-green-500 p-2 text-white">
                        <MessageCircle size={20} />
                      </div>
                    </div>
                  </div>
                </div>
                {/* Decorative elements */}
                <div className="absolute -right-4 -top-4 h-24 w-24 rounded-full bg-indigo-100/50 blur-2xl" />
                <div className="absolute -bottom-8 -left-8 h-32 w-32 rounded-full bg-blue-100/50 blur-3xl" />
              </motion.div>
            </div>
          </div>
        </section>

        {/* 2. Problem Section */}
        <section className="bg-slate-50 px-4 py-24 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
              Cansado de depender apenas de portais imobiliários e indicações?
            </h2>
            <p className="mt-6 text-lg text-slate-600">
              Muitos corretores e imobiliárias enfrentam os mesmos desafios todos os dias: leads frios, falta de previsibilidade nas vendas e a dificuldade constante em encontrar compradores reais.
            </p>
            <div className="mt-12 grid gap-6 sm:grid-cols-2">
              <div className="rounded-2xl bg-white p-6 shadow-sm border border-slate-100 text-left">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-red-50 text-red-600">
                  <Building2 size={24} />
                </div>
                <h3 className="text-lg font-bold text-slate-900">Refém dos Portais</h3>
                <p className="mt-2 text-sm text-slate-600">Você paga caro para competir com centenas de outros corretores pelo mesmo contato, muitas vezes desatualizado.</p>
              </div>
              <div className="rounded-2xl bg-white p-6 shadow-sm border border-slate-100 text-left">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-red-50 text-red-600">
                  <Users size={24} />
                </div>
                <h3 className="text-lg font-bold text-slate-900">Leads Desqualificados</h3>
                <p className="mt-2 text-sm text-slate-600">Perda de tempo com pessoas que não têm perfil de compra ou que apenas "estão dando uma olhadinha".</p>
              </div>
            </div>
          </div>
        </section>

        {/* 3. Solution Section */}
        <section className="px-4 py-24 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <div className="mb-16 text-center">
              <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">A Solução: Tráfego Pago Estratégico</h2>
              <p className="mt-4 text-lg text-slate-600">
                Gere leads qualificados através de anúncios segmentados no Google e nas redes sociais, focando em quem realmente quer comprar.
              </p>
            </div>
            <div className="grid gap-8 md:grid-cols-3">
              {[
                {
                  title: "Geração Constante",
                  desc: "Um fluxo ininterrupto de novos contatos interessados em seus imóveis chegando todos os dias.",
                  icon: <TrendingUp className="text-indigo-600" size={32} />
                },
                {
                  title: "Segmentação Regional",
                  desc: "Anúncios direcionados exatamente para os bairros e perfis de público que você deseja atingir.",
                  icon: <MapPin className="text-indigo-600" size={32} />
                },
                {
                  title: "Foco em Compradores",
                  desc: "Estratégias desenhadas para atrair pessoas com real intenção de compra, não apenas curiosos.",
                  icon: <Users className="text-indigo-600" size={32} />
                }
              ].map((item, idx) => (
                <div key={idx} className="rounded-3xl border border-slate-100 bg-white p-8 shadow-xl shadow-slate-100/50 text-center">
                  <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-indigo-50">
                    {item.icon}
                  </div>
                  <h3 className="text-xl font-bold text-slate-900">{item.title}</h3>
                  <p className="mt-4 text-slate-600 leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 4. How it Works Section */}
        <section className="bg-slate-50 px-4 py-24 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <div className="mb-16 text-center">
              <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">Como funciona o serviço</h2>
              <p className="mt-4 text-lg text-slate-600">Um processo claro e direto para acelerar seus resultados.</p>
            </div>
            <div className="space-y-8">
              {[
                { step: "Etapa 1", title: "Análise da estrutura atual", desc: "Avaliamos como você capta leads hoje e identificamos gargalos na sua presença digital." },
                { step: "Etapa 2", title: "Planejamento estratégico", desc: "Desenhamos a estratégia de anúncios ideal para o tipo de imóvel que você vende." },
                { step: "Etapa 3", title: "Criação das campanhas", desc: "Configuramos seus anúncios no Google Ads e Meta Ads com foco total em conversão." },
                { step: "Etapa 4", title: "Geração de leads", desc: "Seus anúncios começam a rodar e atrair pessoas interessadas em imóveis na sua região." },
                { step: "Etapa 5", title: "Entrega direta", desc: "Os contatos chegam em tempo real diretamente no seu WhatsApp ou CRM de vendas." }
              ].map((item, idx) => (
                <div key={idx} className="flex flex-col gap-4 rounded-2xl bg-white p-6 shadow-sm border border-slate-100 sm:flex-row sm:items-center">
                  <div className="flex-shrink-0 text-sm font-bold uppercase tracking-widest text-indigo-600 sm:w-32">{item.step}</div>
                  <div className="flex-grow">
                    <h3 className="text-lg font-bold text-slate-900">{item.title}</h3>
                    <p className="text-slate-600">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 5. For Whom Section */}
        <section className="px-4 py-24 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <div className="mb-16 text-center">
              <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">Para quem é este serviço?</h2>
              <p className="mt-4 text-lg text-slate-600">Soluções sob medida para diferentes players do mercado imobiliário.</p>
            </div>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {[
                "Corretores Autônomos",
                "Imobiliárias Locais",
                "Lançamentos Imobiliários",
                "Loteamentos",
                "Construtoras",
                "Gestores de Expansão"
              ].map((item, idx) => (
                <div key={idx} className="flex items-center gap-3 rounded-2xl border border-slate-100 bg-slate-50 p-6">
                  <CheckCircle2 className="text-indigo-600" size={24} />
                  <span className="font-semibold text-slate-900">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 6. Differentials Section */}
        <section className="bg-indigo-900 px-4 py-24 text-white sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Por que nos escolher como seu parceiro estratégico?</h2>
            <p className="mt-6 text-lg text-indigo-100">
              Nosso foco é único: gerar leads qualificados que se transformam em escrituras assinadas.
            </p>
            <ul className="mt-10 grid gap-4 sm:grid-cols-2 text-left">
              {[
                "Foco total em geração de leads imobiliários",
                "Campanhas ultra-segmentadas por região e perfil",
                "Estratégia personalizada para o seu tipo de imóvel",
                "Acompanhamento rigoroso de métricas e resultados",
                "Exclusividade regional para parceiros selecionados",
                "Suporte direto para otimização de conversão"
              ].map((benefit, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <CheckCircle2 className="mt-1 flex-shrink-0 text-emerald-400" size={20} />
                  <span className="text-lg text-indigo-50">{benefit}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Cases de Sucesso Section */}
        <section className="px-4 py-24 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <div className="mb-16 text-center">
              <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">Cases de Sucesso</h2>
              <p className="mt-4 text-lg text-slate-600">Resultados reais de quem confiou na nossa estratégia imobiliária.</p>
            </div>
            <div className="grid gap-8 md:grid-cols-3">
              {[
                {
                  title: "Imobiliária em Curitiba",
                  desc: "Campanha focada em sobrados de médio padrão em bairros específicos.",
                  result: "42 leads qualificados em 15 dias",
                  testimonial: "O melhor investimento que já fizemos. O custo por lead caiu drasticamente.",
                  author: "Marcos S., Diretor Comercial"
                },
                {
                  title: "Corretor de Alto Padrão",
                  desc: "Estratégia exclusiva para cobertura de luxo com ticket acima de R$ 2M.",
                  result: "Venda realizada em 22 dias de campanha",
                  testimonial: "Leads realmente qualificados. O filtro que aplicamos nos anúncios funcionou perfeitamente.",
                  author: "André M., Corretor Premium"
                },
                {
                  title: "Lançamento Residencial",
                  desc: "Campanha de pré-lançamento para captação de interessados em loteamento.",
                  result: "80% das unidades reservadas em 1 semana",
                  testimonial: "Estratégia impecável. Superamos a meta de captação antes mesmo do evento de abertura.",
                  author: "Carla F., Gestora de Lançamentos"
                }
              ].map((item, idx) => (
                <div key={idx} className="flex flex-col rounded-3xl border border-slate-100 bg-white p-8 shadow-lg shadow-slate-100/50">
                  <h3 className="text-xl font-bold text-slate-900">{item.title}</h3>
                  <p className="mt-2 text-sm text-slate-500">{item.desc}</p>
                  <div className="my-6 rounded-2xl bg-indigo-50 p-4 text-center">
                    <p className="text-lg font-black text-indigo-600">{item.result}</p>
                  </div>
                  <div className="mt-auto">
                    <p className="italic text-slate-600">"{item.testimonial}"</p>
                    <p className="mt-4 text-sm font-bold text-slate-900">— {item.author}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="bg-slate-50 px-4 py-24 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl">
            <div className="mb-16 text-center">
              <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">Dúvidas Frequentes</h2>
              <p className="mt-4 text-lg text-slate-600">Tudo o que você precisa saber sobre nossa geração de leads.</p>
            </div>
            <div className="space-y-4">
              {[
                {
                  q: "Quanto tempo leva para ver os primeiros resultados?",
                  a: "Geralmente as campanhas começam a gerar os primeiros leads nas primeiras 24 a 48 horas após a ativação dos anúncios."
                },
                {
                  q: "Preciso ter um site ou landing page?",
                  a: "Não necessariamente. Nós podemos direcionar os leads diretamente para o seu WhatsApp ou criar uma landing page de alta conversão específica para o seu negócio."
                },
                {
                  q: "Qual o investimento mínimo recomendado?",
                  a: "Recomendamos um investimento inicial a partir de R$ 1.000,00/mês em anúncios para garantir um volume saudável de leads qualificados."
                },
                {
                  q: "Os leads são exclusivos da minha empresa?",
                  a: "Sim! Diferente de plataformas de anúncios genéricas, os leads gerados através das nossas campanhas são exclusivos seus e chegam diretamente no seu contato."
                },
                {
                  q: "Como vocês garantem a qualidade dos leads?",
                  a: "Utilizamos filtros avançados de segmentação no Google e Instagram, focando em pessoas com comportamento de compra e interesse real no seu serviço ou produto."
                }
              ].map((faq, idx) => (
                <FAQItem key={idx} question={faq.q} answer={faq.a} />
              ))}
            </div>
          </div>
        </section>

        {/* 7 & 8. Offer & Final CTA Section */}
        <section id="contato" className="px-4 py-24 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-6xl overflow-hidden rounded-[2.5rem] bg-indigo-600 shadow-2xl shadow-indigo-200">
            <div className="grid items-center lg:grid-cols-2">
              <div className="p-8 sm:p-12 lg:p-16">
                <h2 className="text-3xl font-bold text-white sm:text-4xl">Diagnóstico gratuito de marketing imobiliário</h2>
                <p className="mt-6 text-lg text-indigo-100">
                  Solicite uma análise gratuita da sua estratégia digital e descubra como gerar mais contatos interessados em imóveis na sua região.
                </p>
                <div className="mt-8 hidden lg:block">
                  <div className="flex items-center gap-4 text-indigo-200">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white/10">
                      <Search size={24} />
                    </div>
                    <div>
                      <p className="font-bold text-white">Análise de Presença Digital</p>
                      <p className="text-sm">Identificamos falhas na sua captação atual.</p>
                    </div>
                  </div>
                  <div className="mt-6 flex items-center gap-4 text-indigo-200">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white/10">
                      <TrendingUp size={24} />
                    </div>
                    <div>
                      <p className="font-bold text-white">Oportunidades de Leads</p>
                      <p className="text-sm">Mapeamos o potencial de compradores na sua área.</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="p-4 sm:p-8 lg:p-12">
                <LeadForm />
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Floating WhatsApp Button */}
      <button 
        onClick={scrollToContact}
        className="fixed bottom-6 right-6 z-50 flex h-16 w-16 items-center justify-center rounded-full bg-green-500 text-white shadow-2xl transition-all hover:scale-110 hover:bg-green-600 active:scale-95"
        aria-label="Falar no WhatsApp"
      >
        <MessageCircle size={32} />
      </button>

      {/* Footer */}
      <footer className="border-t border-slate-100 bg-white px-4 py-12 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl text-center">
          <div className="flex items-center justify-center gap-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-indigo-600 text-white">
              <TrendingUp size={18} />
            </div>
            <span className="text-lg font-bold tracking-tight text-slate-900">D1 Digital</span>
          </div>
          <p className="mt-4 text-sm text-slate-500">
            © {new Date().getFullYear()} D1 Digital - Especialistas em Posicionamento e Geração de Leads.
          </p>
          <div className="mt-6 flex justify-center gap-6 text-slate-400">
            <a href="#" className="hover:text-indigo-600 transition-colors">Privacidade</a>
            <a href="#" className="hover:text-indigo-600 transition-colors">Termos de Uso</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
