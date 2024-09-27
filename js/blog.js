const allArticles = [{"title":"Swift: Guard Statements","category":"Swift","date":"29, Aug 2024","url":"swift-guard-statements","brief":"Guard statements are a powerful feature in Swift that allow you to early exit from a function if..."},{"title":"Solving Common String Problems","category":"Coding","date":"20, Aug 2024","url":"solving-common-string-problems","brief":"Okay, so sometimes the little things matter a whole lot, it may sound odd but I've found great..."},{"title":"Array Manipulation Challenges","category":"Coding","date":"10, Aug 2024","url":"array-manipulation-challenges","brief":"Okay, so sometimes the little things matter a whole lot, it may sound odd but I've found great..."},{"title":"Swift: Concurrency","category":"Swift","date":"28, Jul 2024","url":"swift-concurrency","brief":"Concurrency is the ability to perform multiple tasks simultaneously, think showing a loading wheel while a document is..."},{"title":"Solving the FizzBuzz problem","category":"Coding","date":"20, Jul 2024","url":"solving-the-fizzbuzz-problem","brief":"The first time I came across the FizzBuzz problem was through a Youtube video by Tom Scott. I..."},{"title":"Swift: Sequence Types","category":"Swift","date":"05, Jul 2024","url":"swift-sequence-types","brief":"Sequence types provide a unified interface for working with collections of elements. They offer a powerful way to..."},{"title":"Setting Realistic Deadlines as a Software Developer","category":"Slice of life","date":"30, Jun 2024","url":"setting-realistic-deadlines-as-a-software-developer","brief":"You've probably experienced the pressure of tight deadlines. Maybe you want to be the Joker that always delivers,..."},{"title":"Swift: Optionals","category":"Swift","date":"18, Jun 2024","url":"swift-optionals","brief":"Optionals are a fundamental concept in Swift that allow you to represent values that may or may not..."},{"title":"Swift: Subscripts","category":"Swift","date":"01, Jun 2024","url":"swift-subscripts","brief":"Subscripts are a powerful feature in Swift that allow you to access elements in collections concisely, think of..."},{"title":"Working in distributed teams","category":"Slice of life","date":"22, May 2024","url":"working-in-distributed-teams","brief":"Seems these days that working *remotely* is the norm. Actually, it's kinda rare to find a dev whose..."},{"title":"Swift: Collection Types","category":"Swift","date":"14, May 2024","url":"swift-collection-types","brief":"Collections are fundamental data structures in Swift that allow you to store and manage groups of values. Understanding..."},{"title":"Swift: Higher-Order Functions","category":"Swift","date":"04, May 2024","url":"swift-higher-order-functions","brief":"Higher-order functions are functions that can take other functions as arguments or return functions as results. They're a..."},{"title":"Organizing your time as a developer","category":"Slice of life","date":"25, Apr 2024","url":"organizing-your-time-as-a-developer","brief":"Look, we've all been there. You start your day like a fireball, coffee in hand, ready to tackle..."},{"title":"Swift: Memory Management","category":"Swift","date":"20, Apr 2024","url":"swift-memory-management","brief":"Memory management is a critical aspect of software development that involves allocating and deallocating memory for objects. In..."},{"title":"Learning new programming languages and technologies","category":"Slice of life","date":"12, Apr 2024","url":"learning-new-programming-languages-and-technologies","brief":"So, you've been scrolling through social media or job posts, and suddenly you spot it: *A shiny new..."},{"title":"Swift: Nil-Coalescing Operator","category":"Swift","date":"30, Mar 2024","url":"swift-nil-coalescing-operator","brief":"Optionals are a powerful concept for representing values that might or might not be present. It's the definite..."},{"title":"Swift: Extensions","category":"Swift","date":"20, Mar 2024","url":"swift-extensions","brief":"Extensions in Swift provide a mechanism to add new functionality to existing types without modifying their original implementation...."},{"title":"How to get started as a freelance developer","category":"Slice of life","date":"05, Mar 2024","url":"how-to-get-started-as-a-freelance-developer","brief":"So, you\u2019re thinking of becoming a freelancer? Well, DUH! .. the freedom, flexibility and the chance to pick..."},{"title":"Swift: Generics","category":"Swift","date":"27, Feb 2024","url":"swift-generics","brief":"Generics allow you to create reusable code that can work with different data types. By using generics, you..."},{"title":"Swift: Error Handling","category":"Swift","date":"20, Feb 2024","url":"swift-error-handling","brief":"Error handling is a crucial aspect of software development that helps you write reliable code. Swift provides a..."},{"title":"Handling burnout as a software developer","category":"Slice of life","date":"05, Feb 2024","url":"handling-burnout-as-a-software-developer","brief":"# Handling Burnout as a Software Developer: Reclaiming our Passion\n\nIf you\u2019re reading this, chances are you\u2019ve encountered the..."},{"title":"Swift: Error Handling","category":"Swift","date":"25, Jan 2024","url":"swift-error-handling","brief":"Error handling is a crucial aspect of software development that helps you write reliable code. Swift provides a..."},{"title":"Balancing multiple freelance projects at once","category":"Slice of life","date":"18, Jan 2024","url":"balancing-multiple-freelance-projects-at-once","brief":"Being a freelancer has its perks. You get to be your own boss, set your schedule, work on..."},{"title":"Swift: Closures","category":"Swift","date":"10, Jan 2024","url":"swift-closures","brief":"\nClosures are self-contained blocks of code that can be passed around and executed at a later time. It's..."},{"title":"How I'm using AI to help with this blog?","category":"Slice of life","date":"26, Dec 2023","url":"how-i-am-using-ai-to-help-with-this-blog","brief":"**A message from our little big helper:** \"While I'm a language model and can't claim to be a..."},{"title":"Swift: Optional Chaining","category":"Swift","date":"20, Dec 2023","url":"swift-optional-chaining","brief":"Optional Chaining is a powerful feature in Swift that allows you to safely access properties or call methods..."},{"title":"Swift: Defer Keyword","category":"Swift","date":"01, Dec 2023","url":"swift-defer-keyword","brief":"One powerful tool that can significantly contribute to clean and sound memory management and resource cleanup in Swift..."},{"title":"Why start this blog?","category":"Slice of life","date":"15, Nov 2023","url":"why-start-this-blog","brief":"## A Journey of Sharing and Learning\n\nHello World, and hello to you, fellow developers! It's great to have..."}];
let filteredArticles = [];
let displayPointer = 0;
const articleIncrement = 6;

window.onload = function () {
    const articleCount = loadArticleContent();
    loadSearchLine(articleCount);
} ;

function loadArticleContent() {
    filteredArticles = setFilteredArticles();
    const displayedArticles = filteredArticles.slice(displayPointer, displayPointer + articleIncrement);
    pushArticlesToScreen(displayedArticles);
    displayPointer += articleIncrement;
    setLoadMoreVisible(displayPointer >= filteredArticles.length);
    removeAnimationClassFromOnScreenCards();
    return filteredArticles.length;
}

function loadMoreArticleContent() {
    if (displayPointer >= filteredArticles.length)
        return 0;
    const displayedArticles = filteredArticles.slice(displayPointer, displayPointer + articleIncrement);
    pushArticlesToScreen(displayedArticles);
    displayPointer += articleIncrement;
    setLoadMoreVisible(displayPointer >= filteredArticles.length);
    removeAnimationClassFromOnScreenCards();
    return filteredArticles.length;
}

function removeAnimationClassFromOnScreenCards() {
    setTimeout(function () {
        const elements = document.getElementsByClassName('articleAnimated');
        for (let ii = elements.length - 1; ii >= 0; ii--) {
            elements[ii].classList.remove('articleAnimated')
        }
    }, 400)
}

function pushArticlesToScreen(articles) {
    const container = document.getElementsByClassName("container")[1];
    for (const article of articles) {
        container.innerHTML += articleHTML(article);
    }
}

function articleHTML(article) {
    let template = `
<div class="articleCard articleAnimated" onclick=\"goToArticle('$article_url')\">
    <div class=\"articleCardCover\"><img src=\"$article_url/cover.jpg\"></div>
    <div class=\"articleCardBrief\">
    <p style='text-decoration: underline; font-weight: 600; padding-bottom: 0'>$article_title</p>
    <p style='padding-top: 2px; font-size: 14px; font-weight: 400;'>$article_date</p>
    <p style='padding-top: 0'>$content <span style='text-decoration: underline'>Read more</span></p>
    </div>
</div>`;

    template = template.replaceAll('$article_url', article['url'])
    template = template.replaceAll('$article_date', article['date'])
    template = template.replaceAll('$content', article['brief'])
    template = template.replaceAll('$article_title', article['title'])
    return template;
}

function setFilteredArticles() {
    const urlParams = new URLSearchParams(window.location.search);
    const searchString = urlParams.get('search');
    const category = urlParams.get('category');
    const bySearch = filteredArticlesTitles(allArticles, searchString);
    return filteredArticlesCategories(bySearch, category);
}

function filteredArticlesCategories(articles, category) {
    if (isValid(category) === false)
        return articles;
    const categoryLower = category.toLowerCase();
    return articles.filter((article) => article['category'].toLowerCase() === categoryLower);
}

function filteredArticlesTitles(articles, search) {
    if (!isValid(search))
        return articles;
    const words = search.split(" ").map((word) => word.toLowerCase());
    return articles.filter((article) => articleTitleContainsWords(article, words));
}

function articleTitleContainsWords(article, words) {
    const title = article['title'].toLowerCase();
    for (const word of words)
        if (!title.includes(word))
            return false;
    return true;
}

function loadSearchLine(articleCount) {
    const container = document.getElementById('searchTitleContainerTitleHolder');

    const urlParams = new URLSearchParams(window.location.search);
    let content = '';

    const searchString = urlParams.get('search');
    if (isValid(searchString))
        content += 'Search: ' + searchString;

    const category = urlParams.get('category');
    if (isValid(category))
        content += (content.length === 0 ? '' : "<br>") + 'Category: ' + category;

    if (articleCount === 0)
        content += (content.length === 0 ? '' : "<br><br>") + 'No results match your filters!';

    if (content.length !== 0)
        content += "<br>" + '<a style="color: inherit" href="/blog">reset?</a>';

    container.innerHTML = content;
}

function isValid(str) {
    return !(str === null || str === undefined || str.trim() === "");
}

function setLoadMoreVisible(isVisible) {
    document.getElementsByClassName('searchLoadMoreContainer')[0].hidden = isVisible;
}