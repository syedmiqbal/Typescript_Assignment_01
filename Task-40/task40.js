// Function to create an album object
function makeAlbum(artist, title, tracks) {
    var album = {
        artist: artist,
        title: title,
    };
    if (tracks !== undefined) {
        album.tracks = tracks;
    }
    return album;
}
// Example function calls
var album1 = makeAlbum("Sajjad Ali", "Doorian");
var album2 = makeAlbum("Atif Aslam", "Bhonda Kalakar", 12);
var album3 = makeAlbum("Zafar Ali", "Dard e Dil");
// Print the album information
console.log(album1);
console.log(album2);
console.log(album3);
