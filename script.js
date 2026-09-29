const btnComecar = document.getElementById("btnComecar");

const telaInicial = document.getElementById("telaInicial");
const telaQuiz = document.getElementById("telaQuiz");
const telaResultado = document.getElementById("telaResultado");

const perguntaElement = document.getElementById("pergunta");
const alternativasElement = document.getElementById("alternativas");

const numeroPergunta = document.getElementById("contador");
const progresso = document.getElementById("progresso");
const porcentagem = document.getElementById("porcentagem");
const btnReiniciar = document.getElementById("btnReiniciar");

let perguntaAtual = 0;

const pontuacao = {
    desenvolvimento: 0,
    frontend: 0,
    bancoDados: 0,
    qa: 0,
    dados: 0,
    devops: 0,
    produto: 0,
    seguranca: 0,
    suporte: 0
};




const perguntas = [
    {
        pergunta: "Você está em um projeto que está andando muito bem, estável e já entregando resultado. Surge a oportunidade de entrar em outro projeto que você ainda não conhece direito, mas com um potencial de retorno bem maior. O que você faria?",

        alternativas: [
            {
                texto: "Ficaria no projeto atual. Se está funcionando, prefiro não mexer.",
                pontos: { qa: 2, bancoDados: 1 },
            },
            {
                texto: "Pesquisaria bastante o novo antes de decidir.",
                pontos: { dados: 2, seguranca: 1 },
            },
            {
                texto: "Arriscaria o novo. A possibilidade de algo maior vale a tentativa.",
                pontos: { desenvolvimento: 2, frontend: 1 },
            },
            {
                texto: "Tentaria encontrar uma maneira de participar dos dois.",
                pontos: { produto: 2, devops: 1 },
            }
        ]
    },

    {
        pergunta: "Você precisa escolher entre duas tecnologias para um projeto. Uma você já domina e sabe exatamente como usar. A outra é nova para você, mas parece muito mais interessante para aquele projeto.",

        alternativas: [
            {
                texto: "Usaria a que já conheço e evitaria uma complicação desnecessária.",
                pontos: { bancoDados: 2, qa: 1 },
            },
            {
                texto: "Estudaria a nova antes de tomar uma decisão.",
                pontos: { dados: 2, seguranca: 1 },
            },
            {
                texto: "Escolheria a nova e aprenderia durante o projeto.",
                pontos: { desenvolvimento: 2, frontend: 1 },
            },
            {
                texto: "Faria um pequeno teste com as duas antes de escolher.",
                pontos: { qa: 2, devops: 1 },
            }
        ]
    },

    {
        pergunta: "Você passou alguns dias planejando como desenvolver uma funcionalidade. Quando começa a implementar, percebe uma possibilidade que não estava no plano e que pode deixar o resultado melhor, mas vai exigir mudar algumas coisas.",

        alternativas: [
            {
                texto: "Seguiria o planejamento original.",
                pontos: { bancoDados: 2, seguranca: 1 },
            },
            {
                texto: "Pararia para avaliar se a mudança realmente compensa.",
                pontos: { produto: 2, dados: 1 },
            },
            {
                texto: "Mudaria o plano e veria até onde a nova ideia leva.",
                pontos: { frontend: 2, desenvolvimento: 1 },
            },
            {
                texto: "Testaria a nova ideia separadamente antes de mexer no projeto.",
                pontos: { qa: 2, devops: 1 },
            }
        ]
    },

    {
        pergunta: "Você está trabalhando em um problema há bastante tempo. Você ainda não encontrou a solução, mas sabe que provavelmente conseguiria resolver se continuasse tentando.",

        alternativas: [
            {
                texto: "Continuaria tentando até descobrir.",
                pontos: { desenvolvimento: 2, bancoDados: 1 },
            },
            {
                texto: "Procuraria alguém para trocar uma ideia.",
                pontos: { suporte: 2, produto: 1 },
            },
            {
                texto: "Daria uma pausa e voltaria depois.",
                pontos: { dados: 2, qa: 1 },
            },
            {
                texto: "Procuraria uma abordagem completamente diferente.",
                pontos: { frontend: 2, desenvolvimento: 1 },
            }
        ]
    },

    {
        pergunta: "Você precisa continuar uma funcionalidade escrita por outra pessoa. O código funciona, mas está organizado de uma maneira completamente diferente da que você usaria.",

        alternativas: [
            {
                texto: "Manteria a estrutura e mexeria somente no necessário.",
                pontos: { qa: 2, devops: 1 },
            },
            {
                texto: "Primeiro tentaria entender por que a pessoa fez daquela forma.",
                pontos: { dados: 2, suporte: 1 },
            },
            {
                texto: "Adaptaria algumas partes para deixar mais parecido com o meu jeito.",
                pontos: { desenvolvimento: 2, frontend: 1 },
            },
            {
                texto: "Aproveitaria para reorganizar tudo que pudesse melhorar.",
                pontos: { bancoDados: 2, devops: 1 },
            }
        ]
    },

    {
        pergunta: "Uma pessoa nova entra no projeto e precisa aprender uma parte do sistema que você conhece bem.",

        alternativas: [
            {
                texto: "Explicaria o necessário e deixaria ela explorar o resto.",
                pontos: { suporte: 2, desenvolvimento: 1 },
            },
            {
                texto: "Tentaria entender primeiro como ela prefere aprender.",
                pontos: { produto: 2, suporte: 1 },
            },
            {
                texto: "Mostraria tudo na prática e deixaria ela perguntar durante o processo.",
                pontos: { suporte: 2, frontend: 1 },
            },
            {
                texto: "Montaria uma explicação mais completa para evitar que ela fique perdida depois.",
                pontos: { bancoDados: 2, seguranca: 1 },
            }
        ]
    },

    {
        pergunta: "Uma funcionalidade importante precisa ficar pronta antes do previsto. O time precisa decidir o que fazer primeiro.",

        alternativas: [
            {
                texto: "Cortaria tudo que não for essencial e focaria na entrega.",
                pontos: { desenvolvimento: 2, produto: 1 },
            },
            {
                texto: "Reorganizaria as tarefas antes de começar a mudar qualquer coisa.",
                pontos: { produto: 2, bancoDados: 1 },
            },
            {
                texto: "Conversaria com o time para decidir o que vale priorizar.",
                pontos: { suporte: 2, produto: 1 },
            },
            {
                texto: "Tentaria encontrar uma solução diferente que permita manter o máximo possível.",
                pontos: { devops: 2, desenvolvimento: 1 },
            }
        ]
    },

    {
        pergunta: "Você está discutindo um problema técnico com outra pessoa e ela apresenta uma solução que você nunca teria pensado.",

        alternativas: [
            {
                texto: "Quero entender como ela chegou naquela solução.",
                pontos: { dados: 2, suporte: 1 },
            },
            {
                texto: "Comparo a ideia com a minha antes de decidir.",
                pontos: { qa: 2, seguranca: 1 },
            },
            {
                texto: "Se fizer sentido, abandono minha ideia sem problema.",
                pontos: { produto: 2, frontend: 1 },
            },
            {
                texto: "Testo a ideia dela para ver se realmente funciona melhor.",
                pontos: { qa: 2, desenvolvimento: 1 },
            }
        ]
    },

    {
        pergunta: "Durante uma reunião sobre um projeto, alguém levanta uma ideia que não tem relação direta com o problema atual, mas pode gerar uma possibilidade interessante para o futuro.",

        alternativas: [
            {
                texto: "Anoto a ideia e volto para o assunto principal.",
                pontos: { bancoDados: 2, qa: 1 },
            },
            {
                texto: "Exploro um pouco a ideia antes de voltar ao assunto.",
                pontos: { produto: 2, frontend: 1 },
            },
            {
                texto: "Se parecer realmente promissora, mudo a direção da conversa.",
                pontos: { frontend: 2, desenvolvimento: 1 },
            },
            {
                texto: "Prefiro terminar o assunto atual e discutir isso depois.",
                pontos: { devops: 2, seguranca: 1 },
            }
        ]
    },

    {
        pergunta: "Você entrega uma solução e alguém aponta uma maneira diferente de fazer que você não tinha considerado.",

        alternativas: [
            {
                texto: "Quero entender o motivo da sugestão antes de mudar.",
                pontos: { dados: 2, seguranca: 1 },
            },
            {
                texto: "Comparo as duas soluções e fico com a que fizer mais sentido.",
                pontos: { qa: 2, desenvolvimento: 1 },
            },
            {
                texto: "Se a outra for melhor, mudo sem problema.",
                pontos: { produto: 2, frontend: 1 },
            },
            {
                texto: "Prefiro testar as duas antes de decidir.",
                pontos: { qa: 2, devops: 1 },
            }
        ]
    },

    {
        pergunta: "Você pode escolher uma pessoa para trabalhar com você em uma tarefa importante. Duas pessoas têm praticamente o mesmo nível técnico.",

        alternativas: [
            {
                texto: "Escolho quem é mais organizada.",
                pontos: { bancoDados: 2, qa: 1 },
            },
            {
                texto: "Escolho quem costuma trazer ideias diferentes.",
                pontos: { frontend: 2, desenvolvimento: 1 },
            },
            {
                texto: "Escolho quem consigo me comunicar melhor.",
                pontos: { suporte: 2, produto: 1 },
            },
            {
                texto: "Escolho quem costuma manter a calma quando aparece um problema.",
                pontos: { devops: 2, seguranca: 1 },
            }
        ]
    },

    {
        pergunta: "O projeto terminou, funcionou e foi entregue dentro do prazo. Pensando na experiência toda, o que mais faria você considerar que valeu a pena?",

        alternativas: [
            {
                texto: "Ter aprendido alguma coisa que eu não sabia.",
                pontos: { desenvolvimento: 2, dados: 1 },
            },
            {
                texto: "Ter conseguido resolver algo que parecia difícil.",
                pontos: { seguranca: 2, qa: 1 },
            },
            {
                texto: "Ter trabalhado com pessoas que tornaram o processo melhor.",
                pontos: { suporte: 2, produto: 1 },
            },
            {
                texto: "Ter surgido alguma coisa inesperada que acabou tornando o projeto mais interessante.",
                pontos: { frontend: 2, devops: 1 },
            }
        ]
    }
];



btnComecar.addEventListener("click", () => {
    telaInicial.classList.add("escondida");
    telaQuiz.classList.remove("escondida");

    mostrarPergunta();
});


function mostrarPergunta() {

    const pergunta = perguntas[perguntaAtual];

    numeroPergunta.textContent =
        `PERGUNTA ${perguntaAtual + 1} DE ${perguntas.length}`;

    const percentual =
        Math.round(((perguntaAtual + 1) / perguntas.length) * 100);

    porcentagem.textContent = `${percentual}%`;

    progresso.style.width = `${percentual}%`;

    perguntaElement.textContent = pergunta.pergunta;

    alternativasElement.innerHTML = "";

    pergunta.alternativas.forEach((alternativa, index) => {

        const botao = document.createElement("button");

        botao.classList.add("alternativa");

        const letra = document.createElement("span");

        letra.classList.add("letra");

        letra.textContent = String.fromCharCode(65 + index);

        const texto = document.createElement("span");

        texto.textContent = alternativa.texto;

        botao.appendChild(letra);
        botao.appendChild(texto);

        botao.addEventListener("click", () => {
            responder(alternativa);
        });

        alternativasElement.appendChild(botao);
    });
}

function responder(alternativa) {

    // Soma os pontos da área de TI
    for (const area in alternativa.pontos) {
        pontuacao[area] += alternativa.pontos[area];
    }

    perguntaAtual++;

    if (perguntaAtual < perguntas.length) {
        mostrarPergunta();
    } else {
        mostrarResultado();
    }
}


function mostrarResultado() {

    telaQuiz.classList.add("escondida");
    telaResultado.classList.remove("escondida");

    // Ordena as áreas da maior pontuação para a menor
    const ranking = Object.entries(pontuacao)
        .sort((a, b) => b[1] - a[1]);

    // Primeira e segunda colocadas
    const primeiroLugar = ranking[0][0];
    const segundoLugar = ranking[1][0];

    const resultados = {
        desenvolvimento: {
            titulo: "Desenvolvimento",
            icone: "💻",
            descricao: "Você gosta de colocar a mão na massa, entender problemas e transformar ideias em algo que realmente funciona.",
            superpoder: "Transformar problemas complicados em algo que finalmente funciona."
        },

        frontend: {
            titulo: "Front-end / UX",
            icone: "🎨",
            descricao: "Você tende a pensar bastante na experiência e em como transformar uma ideia em algo interessante e fácil de usar.",
            superpoder: "Fazer uma ideia funcionar e ainda deixar tudo mais interessante de usar."
        },

        bancoDados: {
            titulo: "Banco de Dados",
            icone: "🗄️",
            descricao: "Você gosta de organização, estrutura e de entender exatamente como as informações se encaixam.",
            superpoder: "Encontrar ordem no meio da bagunça."
        },

        qa: {
            titulo: "QA / Testes",
            icone: "🔍",
            descricao: "Você tem tendência a questionar, testar possibilidades e perceber problemas que outras pessoas podem deixar passar.",
            superpoder: "Encontrar aquilo que todo mundo jurava que estava funcionando."
        },

        dados: {
            titulo: "Dados / BI",
            icone: "📊",
            descricao: "Você gosta de entender o que está por trás das coisas antes de tirar uma conclusão.",
            superpoder: "Encontrar padrões onde outras pessoas só enxergam números."
        },

        devops: {
            titulo: "DevOps / Infra",
            icone: "⚙️",
            descricao: "Você tende a valorizar estabilidade, organização e soluções que continuem funcionando mesmo quando as coisas mudam.",
            superpoder: "Fazer tudo continuar funcionando quando começa a dar problema."
        },

        produto: {
            titulo: "Produto / Projetos",
            icone: "🚀",
            descricao: "Você naturalmente pensa em prioridades, pessoas e no caminho necessário para fazer uma ideia sair do papel.",
            superpoder: "Fazer pessoas e ideias caminharem na mesma direção."
        },

        seguranca: {
            titulo: "Segurança",
            icone: "🔐",
            descricao: "Você tende a analisar riscos antes de confiar completamente em uma solução.",
            superpoder: "Perceber o problema antes de ele virar problema."
        },

        suporte: {
            titulo: "Suporte",
            icone: "💬",
            descricao: "Você tem facilidade para lidar com pessoas, entender problemas e encontrar uma maneira de tornar as coisas mais simples.",
            superpoder: "Transformar 'não faço ideia do que está acontecendo' em 'agora entendi'."
        }
    };

    const resultadoPrincipal = resultados[primeiroLugar];
    const resultadoSecundario = resultados[segundoLugar];

    // Resultado principal
    document.getElementById("resultadoIcone").textContent =
        resultadoPrincipal.icone;

    document.getElementById("resultadoTitulo").textContent =
        resultadoPrincipal.titulo;

    document.getElementById("resultadoDescricao").textContent =
        resultadoPrincipal.descricao;

    // Segundo resultado
    document.getElementById("resultadoSecundario").textContent =
        resultadoSecundario.titulo;

    document.getElementById("resultadoSuperpoder").textContent =
        resultadoPrincipal.superpoder;
    const btnNovamente = document.getElementById("btnNovamente");

    btnReiniciar.addEventListener("click", () => {
        // Volta para a primeira pergunta
        perguntaAtual = 0;

        // Zera a pontuação
        for (const area in pontuacao) {
            pontuacao[area] = 0;
        }

        // Volta para o quiz
        telaResultado.classList.add("escondida");
        telaQuiz.classList.remove("escondida");

        // Mostra a primeira pergunta
        mostrarPergunta();
    });
}
