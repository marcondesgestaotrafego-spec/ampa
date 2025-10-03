import React from 'react';
import { Card, CardContent } from './ui/card';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { Heart, Instagram, Copy, CheckCircle, Construction, Leaf, Droplets } from 'lucide-react';
import { useState } from 'react';
import { toast } from 'sonner';

const ConstructionPage = () => {
  const [copied, setCopied] = useState(false);
  
  const pixKey = '48988294377';
  
  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(pixKey);
      setCopied(true);
      toast.success('Chave PIX copiada com sucesso!');
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      toast.error('Erro ao copiar a chave PIX');
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-teal-50 to-cyan-50">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-sm border-b border-emerald-100 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="relative">
                <img 
                  src="https://customer-assets.emergentagent.com/job_ampa-construction/artifacts/qz1thdh7_A%20M%20P%20A%20%281%29.png" 
                  alt="AMPA Logo" 
                  className="w-12 h-12 object-contain"
                />
              </div>
              <div>
                <h1 className="text-xl font-bold text-emerald-800">AMPA</h1>
                <p className="text-sm text-emerald-600">Aliança Missionária Pró Amazônia</p>
              </div>
            </div>
            <Badge variant="outline" className="border-emerald-300 text-emerald-700">
              <Construction className="w-3 h-3 mr-1" />
              Site em Construção
            </Badge>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        {/* Hero Section */}
        <div className="text-center mb-12 relative">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-emerald-100/30 to-transparent transform -skew-y-1 z-0"></div>
          <div className="relative z-10 py-8">
            <div className="flex items-center justify-center mb-4">
              <Droplets className="w-8 h-8 text-teal-500 mr-2" />
              <Construction className="w-8 h-8 text-amber-500 mx-2" />
              <Leaf className="w-8 h-8 text-emerald-500 ml-2" />
            </div>
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-emerald-700 via-teal-700 to-emerald-800 bg-clip-text text-transparent mb-6">
              Estamos Construindo Algo Especial
            </h2>
            <div className="max-w-3xl mx-auto">
              <p className="text-lg text-emerald-700 mb-4 leading-relaxed font-medium">
                "De coração em coração, pelas águas da Amazônia, levamos a vida que brota do amor de Deus."
              </p>
              <p className="text-emerald-600 mb-6">
                Nossa nova presença digital está sendo desenvolvida para melhor servir nossa missão na Amazônia.
              </p>
            </div>
          </div>
        </div>

        {/* Construction Status */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <Card className="bg-white/70 backdrop-blur-sm border-emerald-200 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
            <CardContent className="p-6">
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-lg flex items-center justify-center mr-3">
                  <Construction className="w-5 h-5 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-emerald-800">Status do Projeto</h3>
              </div>
              <div className="space-y-3">
                <div className="flex items-center text-emerald-700">
                  <CheckCircle className="w-4 h-4 mr-2 text-emerald-500" />
                  <span className="text-sm">Planejamento Concluído</span>
                </div>
                <div className="flex items-center text-emerald-700">
                  <CheckCircle className="w-4 h-4 mr-2 text-emerald-500" />
                  <span className="text-sm">Design em Desenvolvimento</span>
                </div>
                <div className="flex items-center text-emerald-600">
                  <div className="w-4 h-4 mr-2 border-2 border-emerald-300 rounded-full animate-pulse"></div>
                  <span className="text-sm">Implementação em Progresso</span>
                </div>
              </div>
              <div className="mt-4">
                <div className="w-full bg-emerald-100 rounded-full h-2">
                  <div className="bg-gradient-to-r from-emerald-500 to-teal-500 h-2 rounded-full transition-all duration-300" style={{ width: '65%' }}></div>
                </div>
                <p className="text-xs text-emerald-600 mt-1">65% Completo</p>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-white/70 backdrop-blur-sm border-emerald-200 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
            <CardContent className="p-6">
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 bg-gradient-to-br from-amber-500 to-yellow-600 rounded-lg flex items-center justify-center mr-3">
                  <Heart className="w-5 h-5 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-emerald-800">Nossa Missão Continua</h3>
              </div>
              <p className="text-emerald-700 mb-4">
                Enquanto desenvolvemos nossa nova plataforma, continuamos nosso trabalho missionário 
                levando esperança e apoio às comunidades amazônicas.
              </p>
              <p className="text-sm text-emerald-600">
                Cada doação faz a diferença na vida de famílias que precisam de apoio básico.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Donation Section */}
        <div className="max-w-4xl mx-auto mb-12">
          <Card className="bg-gradient-to-br from-white to-emerald-50/50 backdrop-blur-sm border-emerald-200 shadow-xl">
            <CardContent className="p-8">
              <div className="text-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Heart className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-emerald-800 mb-2">Apoie Nossa Missão</h3>
                <p className="text-emerald-600">Sua doação ajuda a levar esperança às comunidades da Amazônia</p>
              </div>
              
              <div className="bg-white rounded-xl p-6 border border-emerald-100 shadow-inner">
                <div className="text-center mb-4">
                  <p className="text-sm text-emerald-600 mb-2">Chave PIX para Doação</p>
                  <div className="flex items-center justify-center space-x-2 bg-emerald-50 rounded-lg p-4">
                    <span className="text-2xl font-mono font-bold text-emerald-800 tracking-wider">{pixKey}</span>
                    <Button
                      onClick={copyToClipboard}
                      variant="outline"
                      size="sm"
                      className="ml-3 border-emerald-300 text-emerald-700 hover:bg-emerald-100"
                    >
                      {copied ? (
                        <CheckCircle className="w-4 h-4 text-emerald-600" />
                      ) : (
                        <Copy className="w-4 h-4" />
                      )}
                    </Button>
                  </div>
                </div>
                
                <div className="text-center">
                  <p className="text-sm text-emerald-600 mb-3">Responsável: <span className="font-semibold">Pr. Cosme Antônio</span></p>
                  <div className="flex items-center justify-center space-x-4">
                    <a 
                      href="https://www.instagram.com/alianca_ampa/" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center space-x-2 text-emerald-700 hover:text-emerald-800 transition-colors"
                    >
                      <Instagram className="w-5 h-5" />
                      <span className="text-sm font-medium">@alianca_ampa</span>
                    </a>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Coming Soon Features */}
        <div className="text-center mb-8">
          <h3 className="text-2xl font-bold text-emerald-800 mb-6">Em Breve no Novo Site</h3>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white/70 backdrop-blur-sm rounded-xl p-6 border border-emerald-100 shadow-md hover:shadow-lg transition-all duration-300">
              <div className="w-12 h-12 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-lg flex items-center justify-center mx-auto mb-3">
                <Heart className="w-6 h-6 text-white" />
              </div>
              <h4 className="font-semibold text-emerald-800 mb-2">Histórias de Impacto</h4>
              <p className="text-sm text-emerald-600">Conheça as famílias e comunidades que já foram ajudadas</p>
            </div>
            
            <div className="bg-white/70 backdrop-blur-sm rounded-xl p-6 border border-emerald-100 shadow-md hover:shadow-lg transition-all duration-300">
              <div className="w-12 h-12 bg-gradient-to-br from-teal-500 to-cyan-600 rounded-lg flex items-center justify-center mx-auto mb-3">
                <Droplets className="w-6 h-6 text-white" />
              </div>
              <h4 className="font-semibold text-emerald-800 mb-2">Projetos Ativos</h4>
              <p className="text-sm text-emerald-600">Acompanhe nossos projetos em andamento na Amazônia</p>
            </div>
            
            <div className="bg-white/70 backdrop-blur-sm rounded-xl p-6 border border-emerald-100 shadow-md hover:shadow-lg transition-all duration-300">
              <div className="w-12 h-12 bg-gradient-to-br from-amber-500 to-yellow-600 rounded-lg flex items-center justify-center mx-auto mb-3">
                <Leaf className="w-6 h-6 text-white" />
              </div>
              <h4 className="font-semibold text-emerald-800 mb-2">Voluntariado</h4>
              <p className="text-sm text-emerald-600">Descubra como você pode participar da nossa missão</p>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-emerald-800 text-white py-8 mt-12">
        <div className="container mx-auto px-4 text-center">
          <div className="flex items-center justify-center mb-4">
            <img 
              src="https://customer-assets.emergentagent.com/job_ampa-construction/artifacts/qz1thdh7_A%20M%20P%20A%20%281%29.png" 
              alt="AMPA Logo" 
              className="w-8 h-8 object-contain mr-2 bg-white/10 rounded p-1"
            />
            <span className="text-lg font-bold">AMPA</span>
          </div>
          <p className="text-emerald-200 mb-2">Aliança Missionária Pró Amazônia</p>
          <p className="text-sm text-emerald-300">"De coração em coração, pelas águas da Amazônia"</p>
          <div className="mt-4 pt-4 border-t border-emerald-700">
            <p className="text-xs text-emerald-400">© 2025 AMPA - Todos os direitos reservados</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default ConstructionPage;