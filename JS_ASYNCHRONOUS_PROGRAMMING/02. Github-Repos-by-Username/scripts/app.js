async function loadRepos() {
    const inputEl = document.getElementById("username");
    const username = inputEl.value;

    const ulEl = document.getElementById("repos");
    ulEl.replaceChildren();

    try {
        const res = await fetch(
            `https://api.github.com/users/${username}/repos`
        );
        const repoObjects = await res.json();

        if (!res.ok) {
            throw {
                status: res.status,
                message: res.statusText,
            };
        }

        for (const repo of repoObjects) {
            const repoName = repo.full_name;
            const repoLink = repo.html_url;
            console.log(repoName);

            const liEl = document.createElement("li");
            const aEl = document.createElement("a");

            aEl.href = repoLink;
            aEl.textContent = repoName;

            liEl.appendChild(aEl);
            ulEl.appendChild(liEl);
        }
    } catch (err) {
        const liEl = document.createElement("li");
        liEl.textContent = `Not Found Error - ${err.status}`;
        ulEl.appendChild(liEl);
    }
}
