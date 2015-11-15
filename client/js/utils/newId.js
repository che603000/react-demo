/**
 * Created by Александр on 15.11.2015.
 */

let lastId = 0;

export default function (prefix = 'id_') {
    lastId++;
    return `${prefix}${lastId}`;
}