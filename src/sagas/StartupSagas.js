import { getGames } from './GetGameSagas'

export function* startup (api) {
    yield getGames(api)
}
