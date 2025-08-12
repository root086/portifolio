// Icons
lucide.createIcons();

//Butão Mobile
function toggleMenu() {
  const sidebar = document.querySelector(".sidebar");
  const overlay = document.querySelector(".overlay");
  const icon = document.getElementById("menuIcon");
  sidebar.classList.toggle("open");
  overlay.classList.toggle("show");
  if (icon.getAttribute("data-lucide") === "menu") {
    icon.setAttribute("data-lucide", "x");
  } else {
    icon.setAttribute("data-lucide", "menu");
  }
  lucide.createIcons();
}

//Animação Terminal
document.addEventListener("DOMContentLoaded", function () {
  const terminal = document.getElementById("terminal-body");

  function typeCommand(
    promptUser,
    promptHost,
    promptDir,
    commandText,
    callback
  ) {
    const line = document.createElement("p");

    // Nomes fixos
    const userSpan = document.createElement("span");
    userSpan.className = "user";
    userSpan.textContent = promptUser;

    const hostSpan = document.createElement("span");
    hostSpan.className = "host";
    hostSpan.textContent = promptHost;

    const dirSpan = document.createElement("span");
    dirSpan.className = "dir";
    dirSpan.textContent = promptDir;

    line.appendChild(userSpan);
    line.appendChild(document.createTextNode("@"));
    line.appendChild(hostSpan);
    line.appendChild(document.createTextNode(":"));
    line.appendChild(dirSpan);
    line.appendChild(document.createTextNode("$ "));

    // Texto Digitado
    const cmdSpan = document.createElement("span");
    line.appendChild(cmdSpan);

    terminal.appendChild(line);

    // Animação De Digitação
    let i = 0;
    function typing() {
      if (i < commandText.length) {
        cmdSpan.textContent += commandText.charAt(i);
        i++;
        setTimeout(typing, 180);
      } else {
        if (callback) setTimeout(callback, 300);
      }
    }
    typing();
  }

  function printOutput(text) {
    const out = document.createElement("p");
    out.textContent = text;
    terminal.appendChild(out);
  }

  function printBlock(html) {
    const div = document.createElement("div");
    div.innerHTML = html;
    terminal.appendChild(div);
  }

  typeCommand("lucas", "kali", "~", "cd Documentos", () => {
    typeCommand("lucas", "kali", "~/Documentos", "ls", () => {
      printOutput("sobre_mim.txt");
      typeCommand("lucas", "kali", "~/Documentos", "cat sobre_mim.txt", () => {
        printBlock(`
Lucas Vitor  

Assistente de TI | Em Transição para Cibersegurança

Bom, minha experiência com a tecnologia começou no tempo do modem, mesmo sem saber mexer, meu pai me chamava para resolver os problemas de internet.
Desde então foi só ladeira abaixo (rsrs) — ou melhor, um mergulho sem volta no mundo da tecnologia.
E mesmo sendo uma criança o que era chato se transformou em paixão.
Apesar de ser formado em ADS não me identifiquei tanto com o mundo do desenvolvimento.
Porém, tem algo nos terminais que me acalma (pegou a referência?).
Hoje busco o mundo da segurança, pois sinto que a cada estudo e pesquisa encontrei o meu lugar.

Paixões:  
  • Segurança ofensiva e defensiva  
  • Infraestrutura  
  • Automação  
  • Programação (às vezes)

Inspiração:  
Jesus, o verdadeiro Firewall da minha vida, que protege, guia e dá propósito a tudo que faço.

Experiência:  
Resolução de problemas em ambientes corporativos  
Configuração e manutenção de redes e servidores  
Desenvolvimento de scripts e automações para otimizar tarefas  
Suporte a sistemas

Passa-Tempo:  
Rezar (só assim pra dar conta de tudo)  
Programar ideias aleatórias  
Jogar um fut ou um FIFA  
Explorar CTFs no TryHackMe

echo "Busco transformar ideias em algo prático, sempre com propósito e segurança!"
        `);
      });
    });
  });
});


// Validação do formulário
(function formValidation(){
  const form = document.querySelector('.contato-form');
  if (!form) return;

  function showError(input, msg) {
    const group = input.closest('.form-group');
    const small = group?.querySelector('.error-msg');
    if (small) {
      small.textContent = msg;
      small.style.display = 'block';
    }
    input.setAttribute('aria-invalid', 'true');
  }

  function clearError(input) {
    const group = input.closest('.form-group');
    const small = group?.querySelector('.error-msg');
    if (small) small.style.display = 'none';
    input.removeAttribute('aria-invalid');
  }

  form.addEventListener('submit', (e) => {
    let ok = true;
    const nome = form.querySelector('#nome');
    const email = form.querySelector('#email');
    const msg = form.querySelector('#mensagem');

    if (!nome.value || nome.value.trim().length < 2) {
      showError(nome, 'Informe seu nome.');
      ok = false;
    } else clearError(nome);

    if (!email.validity.valid) {
      showError(email, 'Informe um e-mail válido.');
      ok = false;
    } else clearError(email);


    if (!ok) e.preventDefault();
  });

  form.querySelectorAll('input, textarea').forEach(el => {
    el.addEventListener('input', () => clearError(el));
  });
})();
