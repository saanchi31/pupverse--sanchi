function toggleSubtypes(id) {
  const div = document.getElementById(id);
  if (div.style.display === "block") {
    div.style.display = "none";
  } else {
    div.style.display = "block";
  }
}

function openImage(img) {
  document.getElementById("popupImg").src = img.src;
  document.getElementById("imagePopup").style.display = "flex";
}

function closePopup() {
  document.getElementById("imagePopup").style.display = "none";
}

function showFact() {
  const facts = [
    "Dogs can learn more than 1000 words!",
    "A dog’s sense of smell is at least 40x better than humans.",
    "Dogs dream just like humans do.",
    "Dalmatian puppies are born completely white.",
    "The Basenji is the only dog that doesn’t bark.",
    "Dogs can understand human emotions.",
    "The Labrador Retriever has been the most popular breed for decades."
  ];

  const randomIndex = Math.floor(Math.random() * facts.length);
  document.getElementById("fact").textContent = facts[randomIndex];
}

function getRandomDog() {
  fetch("https://dog.ceo/api/breeds/image/random")
    .then(response => response.json())
    .then(data => {
      document.getElementById("randomDogImg").src = data.message;
    })
    .catch(error => {
      console.error("Error fetching dog image:", error);
    });
}

async function loadBreedImages(breed) {
  try {
    const res = await fetch(`https://dog.ceo/api/breed/${breed}/images/random/3`);
    const data = await res.json();
    const gallery = document.getElementById(`${breed}-gallery`);
    gallery.innerHTML = "";
    data.message.forEach(url => {
      const img = document.createElement("img");
      img.src = url;
      img.alt = breed;
      gallery.appendChild(img);
    });
  } catch (error) {
    console.error(`Failed to fetch ${breed} images:`, error);
  }
}


