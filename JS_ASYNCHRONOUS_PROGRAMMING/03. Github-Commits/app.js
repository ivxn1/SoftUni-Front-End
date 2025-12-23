async function loadCommits() {
    const usernameEl = document.getElementById("username");
    const repoEl = document.getElementById("repo");
    const ulEl = document.getElementById("commits");

    const username = usernameEl.value;
    const repo = repoEl.value;

    ulEl.replaceChildren();

    try {
        const res = await fetch(
            `https://api.github.com/repos/${username}/${repo}/commits`
        );
        const commitObjs = await res.json();

        if (!res.ok) {
            throw {
                status: res.status,
                message: res.statusText
            };
        }

        for (const commitObj of commitObjs) {
            const liEl = document.createElement("li");
            liEl.textContent = `${commitObj.commit.author.name}: ${commitObj.commit.message}`;
            ulEl.appendChild(liEl);
        }
    } catch (error) {
        const liEl = document.createElement("li");
        liEl.textContent = `Error: ${error.status} (Not Found)`;
        ulEl.appendChild(liEl);
    }
}
