class UserCard extends HTMLElement {
  constructor() {
    super();
    const name = this.getAttribute("name");
    const html = /* html */`
      <div class="card">
        <img src="https://avatars.githubusercontent.com/${name}?size=128" alt="${name}">
        <span>${name}</span>
      </div>
    `;

    this.insertAdjacentHTML("beforeend", html);
  }
}

customElements.define("user-card", UserCard);
