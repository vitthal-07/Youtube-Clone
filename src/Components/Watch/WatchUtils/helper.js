export const generateRandomUsername = () => {
    const prefixes = [
        "Tech",
        "Gamer",
        "Vlog",
        "Chef",
        "Travel",
        "Music",
        "Life",
        "Fitness",
        "Creative",
        "Epic",
    ];
    const suffixes = [
        "Guru",
        "Channel",
        "TV",
        "Hub",
        "Studio",
        "Spot",
        "World",
        "Space",
        "Vibes",
        "Zone",
    ];

    const randomPrefix = prefixes[Math.floor(Math.random() * prefixes.length)];
    const randomSuffix = suffixes[Math.floor(Math.random() * suffixes.length)];
    const randomNumber = Math.floor(Math.random() * 10000);

    return `${randomPrefix}${randomSuffix}${randomNumber}`;
};

export const generateRandomMessage = () => {
    const subjects = [
        "John",
        "Emily",
        "Mike",
        "Sara",
        "Chris",
        "Anna",
        "David",
        "Lucy",
        "Mark",
        "Sophia",
    ];
    const actions = [
        "is watching",
        "is enjoying",
        "is loving",
        "is commenting on",
        "is liking",
        "is sharing",
        "is talking about",
        "is thinking about",
    ];
    const contents = [
        "the stream",
        "the video",
        "the content",
        "the discussion",
        "the game",
        "the music",
        "the show",
        "the performance",
    ];
    const emojis = ["😊", "👍", "😂", "😍", "🙌", "🎉", "🔥", "👏", "💯", "😎"];

    const randomSubject = subjects[Math.floor(Math.random() * subjects.length)];
    const randomAction = actions[Math.floor(Math.random() * actions.length)];
    const randomContent = contents[Math.floor(Math.random() * contents.length)];
    const randomEmoji = emojis[Math.floor(Math.random() * emojis.length)];

    return `${randomSubject} ${randomAction} ${randomContent} ${randomEmoji}`;
};
