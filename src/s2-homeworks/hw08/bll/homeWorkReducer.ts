import {UserType} from '../HW8'

type ActionType =
    | { type: 'sort'; payload: 'up' | 'down' }
    | { type: 'check'; payload: number }

export const homeWorkReducer = (state: UserType[], action: ActionType): UserType[] => { // need to fix any
    switch (action.type) {
        case 'sort': { // by name
            switch (action.payload) {
                case "up":
                    return [...state.sort((a, b) => {
                        if (a.name.toLowerCase() > b.name.toLowerCase()) {
                            return 1
                        } else {
                            if (a.name.toLowerCase() < b.name.toLowerCase()) {
                                return -1
                            } else {
                                return 0
                            }
                        }
                    })
                    ]
                case "down":
                    return [...state.sort((a, b) => {
                        if (a.name.toLowerCase() > b.name.toLowerCase()) {
                            return -1
                        } else {
                            if (a.name.toLowerCase() < b.name.toLowerCase()) {
                                return 1
                            } else {
                                return 0
                            }
                        }
                    })
                    ]
                default:
                    return state
            }
        }
        case 'check': {
            const checkedState = state.filter(el => el.age >= action.payload)
            return checkedState.sort((a, b) => a.age - b.age)
        }
        default:
            return state
    }
}
