
export default function reducer(snapcast = {}, action){
    switch (action.type){

        case 'SNAPCAST_SERVER_LOADED':
            var server = Object.assign({}, action.server);
            return Object.assign({}, snapcast, { server: server });


            case 'SNAPCAST_SET_CLIENT_COMMAND':
                var client_commands = snapcast.client_commands[action.id];
                if (!client_commands){
                    client.commands = {};
                }
                client_commands[action.name] = action.command;
                action.client_commands = client_commands;
                break

        case 'SNAPCAST_CLIENT_COMMANDS_UPDATED':
            return Object.assign({}, snapcast, { client_commands: action.client_commands });

        case 'SNAPCAST_CLIENTS_LOADED':
            var clients = Object.assign({}, snapcast.clients);
            for (var client of action.clients){
                clients[client.id] = client;
            }
            return Object.assign({}, snapcast, { clients: clients });

        case 'SNAPCAST_GROUPS_LOADED':
            var groups = Object.assign({}, snapcast.groups);
            for (var group of action.groups){
                groups[group.id] = group;
            }
            return Object.assign({}, snapcast, { groups: groups });

        case 'SNAPCAST_STREAMS_LOADED':
            var streams = Object.assign({}, snapcast.streams);
            for (var stream of action.streams){
                streams[stream.id] = stream;
            }
            return Object.assign({}, snapcast, { streams: streams });

        default:
            return snapcast
    }
}



