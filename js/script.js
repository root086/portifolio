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
          <p>nome="Lucas"</p>
          <p>cargo="Assistente de TI"</p>
          <p>paixoes=["Cibersegurança", "Infraestrutura", "Automação", "Programação (às vezes)"]</p>
          <p>inspiracao="Jesus — o verdadeiro Firewall da minha vida, que protege, guia e dá propósito a tudo que faço"</p>

          <p>experiencia=(</p>
          <p>  "🛠️ Resolução de problemas",</p>
          <p>  "🌐 Redes e conectividade",</p>
          <p>  "🤖 Automações"</p>
          <p>)</p>

          <p>hobbies=(</p>
          <p>  "🧠 Programar ideias aleatórias",</p>
          <p>  "⚽ Jogar Um Fut",</p>
          <p>  "🎮 Ou Um Fifa",</p>
          <p>  "💻 Hacknet — Quem diria que hackear (no jogo!) seria tão divertido?!"</p>
          <p>)</p>

          <p>echo "Busco transformar ideias em algo pratico, sempre com propósito e segurança!"</p>

        `);
      });
    });
  });
});
