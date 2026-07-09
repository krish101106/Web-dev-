
// var spans = document.getElementsByClassName("_ap3a _aaco _aacw _aacx _aad7 _aade");
// var result = [...spans].map(s => ({ text: s.textContent }));

// var blob = new Blob([JSON.stringify(result, null, 2)], { type: "application/json" });
// var link = document.createElement("a");
// link.href = URL.createObjectURL(blob);
// link.download = "spans.json";
// link.click();

// console.log(`Exported ${result.length} items`);

const followerFileInput = document.getElementById("followerFile");
const followingFileInput = document.getElementById("followingFile");
const runBtn = document.getElementById("runBtn");

let data1 = null; // followers
let data2 = null; // following

function readJsonFile(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => {
      try {
        resolve(JSON.parse(reader.result));
      } catch (err) {
        reject(err);
      }
    };
    reader.onerror = reject;
    reader.readAsText(file);
  });
}

function checkReady() {
  runBtn.disabled = !(data1 && data2);
}

followerFileInput.addEventListener("change", async (e) => {
  if (e.target.files[0]) {
    data1 = await readJsonFile(e.target.files[0]);
  }
  checkReady();
});

followingFileInput.addEventListener("change", async (e) => {
  if (e.target.files[0]) {
    data2 = await readJsonFile(e.target.files[0]);
  }
  checkReady();
});

function renderList(ulId, items) {
  const ul = document.getElementById(ulId);
  ul.innerHTML = "";

  if (items.length === 0) {
    ul.innerHTML = `<li class="empty">None</li>`;
    return;
  }

  items.forEach((name) => {
    const li = document.createElement("li");
    li.textContent = name;
    ul.appendChild(li);
  });
}

function downloadJson(filename, data) {
  const blob = new Blob([JSON.stringify(data, null, 2)], { type: "application/json" });
  const link = document.createElement("a");
  link.href = URL.createObjectURL(blob);
  link.download = filename;
  link.click();
}

runBtn.addEventListener("click", () => {
  const followerSet = new Set(data1.map((item) => item.text));

  const mutuals = data2
    .filter((item) => followerSet.has(item.text))
    .map((item) => item.text);

  const notFollowingBack = data2
    .filter((item) => !followerSet.has(item.text))
    .map((item) => item.text);

  document.getElementById("results").style.display = "block";

  document.getElementById("mutualCount").textContent = mutuals.length;
  document.getElementById("notFollowingCount").textContent = notFollowingBack.length;

  renderList("mutualList", mutuals);
  renderList("notFollowingList", notFollowingBack);

  document.getElementById("downloadMutuals").onclick = () =>
    downloadJson("mutuals.json", mutuals);

  document.getElementById("downloadNotFollowing").onclick = () =>
    downloadJson("notFollowingBack.json", notFollowingBack);
});
