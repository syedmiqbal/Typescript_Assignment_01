// Function to create an album object
function makeAlbum(artist: string, title: string, tracks?: number): { artist: string; title: string; tracks?: number } {
    const album: { artist: string; title: string; tracks?: number } = {
        artist: artist,
        title: title,
    };

    if (tracks !== undefined) {
        album.tracks = tracks;
    }

    return album;
}

// Example function calls
const album1 = makeAlbum("Sajjad Ali", "Doorian");
const album2 = makeAlbum("Atif Aslam", "Bhonda Kalakar", 12); 
const album3 = makeAlbum("Zafar Ali", "Dard e Dil");

// Print the album information
console.log(album1);
console.log(album2);
console.log(album3);
