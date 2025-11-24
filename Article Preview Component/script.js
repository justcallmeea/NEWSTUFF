"strict mode";
const shareIcon = document.querySelector(".share-btn");
const parentElement = document.querySelector(".author-section");

const editMarkup = function (e) {
  const button = e.target.closest(".share-btn");
  const html = `<div class="author-profile social-media-links">
            <div class="share-text">
              <p>SHARE</p>
            </div>
            <div class="social-media-links">
              <img src="images/icon-facebook.svg" alt="Facebook icon" />
              <img src="images/icon-twitter.svg" alt="Twitter icon" />
              <img src="images/icon-pinterest.svg" alt="Pinterest icon" />
            </div>
          </div>
          <button class="share-btn btn-clicked">
            <img
              class="share-icon"
              src="images/icon-share.svg"
              alt="Share icon"
            />
          </button>`;
  parentElement.classList.add("author-section-clicked");
  parentElement.innerHTML = "";
  parentElement.insertAdjacentHTML("afterbegin", html);
};

shareIcon.addEventListener("click", editMarkup);
