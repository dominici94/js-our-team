// Ciao ragazzi, esercizio di oggi: Our Team
// nome repo: js-our-team
// Ricreiamo le card del nostro team aggiungendo al layout di base fornito, il nostro javascript in cui:
// Creiamo il nostro array di oggetti che rappresentano ciascun membro del team. Ogni membro dovrà avere le informazioni necessarie per stampare la relativa card: Nome, Ruolo e Foto.
// Prendendo come riferimento il layout di esempio presente nell'html, stampiamo tutte le card del nostro team.
// BONUS: Utilizziamo poi gli input presenti nella pagina per permettere all'utente di aggiungere nuovi membri del team.
// Consigli del giorno: Ragioniamo come sempre a step.
// Prima la logica in italiano e poi traduciamo in codice. console.log() è nostro amico.
// Quando un pezzo di codice funziona, chiediamoci se possiamo scomporlo in funzioni più piccole.
// Buon lavoro e buon divertimento con gli oggetti! :laptop_parrot:

// 1: Creiamo il nostro array di oggetti che rappresentano ciascun membro del team. Ogni membro dovrà avere le informazioni necessarie per stampare la relativa card: Nome, Ruolo e Foto.

const team = [
    {
        'nome' : 'Wayne Barrett',
        'ruolo' : 'Founder & CEO',
        'foto' : 'img/wayne-barnett-founder-ceo.jpg'
    },

    {
        'nome' : 'Angela Caroll',
        'ruolo' : 'Chief Editor',
        'foto' : 'img/angela-caroll-chief-editor.jpg'
    },

    {
        'nome' : 'Walter Gordon',
        'ruolo' : 'Office Manager',
        'foto' : 'img/walter-gordon-office-manager.jpg'
    },

    {
        'nome' : 'Angela Lopez',
        'ruolo' : 'Social Media Manager',
        'foto' : 'img/angela-lopez-social-media-manager.jpg'
    },

    {
        'nome' : 'Scott Estrada',
        'ruolo' : 'Developer',
        'foto' : 'img/scott-estrada-developer.jpg'
    },

    {
        'nome' : 'Barbara Ramos',
        'ruolo' : 'Graphic Designer',
        'foto' : 'img/barbara-ramos-graphic-designer.jpg'
    }
]

// 2: Prendendo come riferimento il layout di esempio presente nell'html, stampiamo tutte le card del nostro team.

const teamContainer = document.querySelector('.team-container');

for(let i = 0; i < team.length; i++){
    teamContainer.innerHTML += `
        <div class="team-card">
            <div class="card-image">
                <img src="${team[i].foto}" alt="Wayne Barnett"/>
            </div>
            <div class="card-text">
                <h3>${team[i].nome}</h3>
                <p>${team[i].ruolo}</p>
            </div>
        </div>
    `;
}
