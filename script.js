const navbar = document.querySelector('.js-select');
const mode = document.querySelector('ul li:nth-child(5)');
const body = document.querySelector('#home');
const nav = document.querySelector('nav');
const jumbotron = document.querySelector('.jumbotron')
const about = document.getElementById('about');
const project = document.getElementById('project');
const h2Project = document.querySelector('.h2-project')
const card = document.querySelector('.card');
const wave1 = document.querySelector('svg .wave-1');
const wave2 = document.querySelector('svg .wave-2');
const wave3 = document.querySelector('svg .wave-3');
const wave4 = document.querySelector('svg .wave-4');
const footer = document.querySelector('footer');
const contact = document.querySelector('#contact');
const button = document.querySelector('form button');

const dom = [nav,jumbotron,about,project,h2Project,project,wave1,wave2,wave3,wave4,contact,footer,button];
const kelas = ['bg-dark','jumbotron-dark','about-dark','project-dark','project-darkh2','project','wave13-dark','wave2-dark','wave13-dark','wave4-dark','contact','bg-dark','btn-dark']

mode.addEventListener('click', () => {
    for(let i = 0; i< dom.length;i++){
        dom[i].classList.toggle(kelas[i]);
    }
})