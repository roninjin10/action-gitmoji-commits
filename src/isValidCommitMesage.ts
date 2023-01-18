const DEFAULT_COMMIT_TYPES = [
    "🎨",
    "⚡️",
    "🔥",
    "🐛",
    "🚑️",
    "✨",
    "📝",
    "🚀",
    "💄",
    "🎉",
    "✅",
    "🔒️",
    "🔐",
    "🔖",
    "🚨",
    "🚧",
    "💚",
    "⬇️",
    "⬆️",
    "📌",
    "👷",
    "📈",
    "♻️",
    "➕",
    "➖",
    "🔧",
    "🔨",
    "🌐",
    "✏️",
    "💩",
    "⏪️",
    "🔀",
    "📦️",
    "👽️",
    "🚚",
    "📄",
    "💥",
    "🍱",
    "♿️",
    "💡",
    "🍻",
    "💬",
    "🗃️",
    "🔊",
    "🔇",
    "👥",
    "🚸",
    "🏗️",
    "📱",
    "🤡",
    "🥚",
    "🙈",
    "📸",
    "⚗️",
    "🔍️",
    "🏷️",
    "🌱",
    "🚩",
    "🥅",
    "💫",
    "🗑️",
    "🛂",
    "🩹",
    "🧐",
    "⚰️",
    "🧪",
    "👔",
    "🩺",
    "🧱",
    "🧑‍💻",
    "💸",
    "🧵",
    "🦺",
    ":art:",
    ":zap:",
    ":fire:",
    ":bug:",
    ":ambulance:",
    ":parkles:",
    ":memo:",
    ":rocket:",
    ":lipstick:",
    ":tada:",
    ":hite_check_mark:",
    ":lock:",
    ":closed_lock_with_key:",
    ":bookmark:",
    ":rotating_light:",
    ":construction:",
    ":green_heart:",
    ":arrow_down:",
    ":arrow_up:",
    ":pushpin:",
    ":construction_worker:",
    ":chart_with_upwards_trend:",
    ":recycle:",
    ":eavy_plus_sign:",
    ":eavy_minus_sign:",
    ":wrench:",
    ":hammer:",
    ":globe_with_meridians:",
    ":pencil2:",
    ":poop:",
    ":rewind:",
    ":twisted_rightwards_arrows:",
    ":package:",
    ":alien:",
    ":truck:",
    ":page_facing_up:",
    ":boom:",
    ":bento:",
    ":wheelchair:",
    ":bulb:",
    ":beers:",
    ":speech_balloon:",
    ":card_file_box:",
    ":loud_sound:",
    ":mute:",
    ":busts_in_silhouette:",
    ":children_crossing:",
    ":building_construction:",
    ":iphone:",
    ":clown_face:",
    ":egg:",
    ":see_no_evil:",
    ":camera_flash:",
    ":alembic:",
    ":mag:",
    ":label:",
    ":seedling:",
    ":triangular_flag_on_post:",
    ":goal_net:",
    ":dizzy:",
    ":wastebasket:",
    ":passport_control:",
    ":adhesive_bandage:",
    ":monocle_face:",
    ":coffin:",
    ":test_tube:",
    ":necktie:",
    ":stethoscope:",
    ":bricks:",
    ":technologist:",
    ":money_with_wings:",
    ":thread:",
    ":safety_vest:",
];

const isValidCommitMessage = (message: string, availableTypes = DEFAULT_COMMIT_TYPES): boolean => {
    // Exceptions.
    // This is a message that's auto-generated by git. Can't do much about it unfortunately. Let's allow it.
    if (message.startsWith("Merge ") || message.startsWith("Revert ")) {
        return true;
    }
    console.log({ message, messagezero: message[0] });
    return availableTypes.some((type) => message.startsWith(type));
};

export default isValidCommitMessage;
