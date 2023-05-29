
/**
 * return a random random with in a range
 *@param min range start (int)
 *@param max range end (int)
 */

export function getRandomNumberInRange(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}