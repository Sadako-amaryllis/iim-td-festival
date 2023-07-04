const axios = require('axios');

async function getFestivalApi() {
   
  try {
    const response = await axios.get('https://data.culture.gouv.fr/api/records/1.0/search/?dataset=panorama-des-festivals&q=&lang=fr&facet=region&facet=domaine&facet=complement_domaine&facet=departement&facet=mois_habituel_de_debut');
    const festivals = response.data.records || [];

    if (festivals.length === 0) {
      console.error('Aucune donnée de festival disponible.');
    }
    const tableauDonnees = festivals.map((festival) => ({
      region: festival.fields?.region,
      complement_domaine: festival.fields?.complement_domaine,
      departement: festival.fields?.departement,
      mois_habituel_de_debut: festival.fields?.mois_habituel_de_debut,
    }));

    return tableauDonnees;
  } catch (error) {
    console.error('Une erreur s\'est produite :', error);
    return [];
  }
}

function test(){
    return "hello"
}

module.exports = {getFestivalApi, test};
