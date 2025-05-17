// RankingSystem.js
// Sistema de carregamento de ranking online a partir de arquivo JSON público

const RANKING_URL = 'https://carlosagpjr.github.io/cyberkidz-survivor/data/ranking.json';

// Busca os dados do ranking e retorna os top N
export async function getOnlineRanking(limit = 10) {
  try {
    const res = await fetch(RANKING_URL);
    const data = await res.json();

    // Ordena por score decrescente, depois por tempo e fase
    return data
      .sort((a, b) => b.score - a.score || b.stage - a.stage || b.time - a.time)
      .slice(0, limit);
  } catch (err) {
    console.error('Erro ao carregar ranking:', err);
    return [];
  }
}

// (Futuro) Envio de score — requer backend ou integração
export async function submitNewScore(entry) {
  console.log('Envio de ranking não implementado (GitHub JSON é somente leitura)');
}