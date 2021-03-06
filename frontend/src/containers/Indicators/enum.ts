export enum fields {
    INDICATORS_LIST = 'INDICATORS_LIST',
    INDICATORS_DIALOG = 'INDICATORS_DIALOG',
    IS_OPEN_DIALOG = 'IS_OPEN_DIALOG',
    DIALOG_DATA = 'DIALOG_DATA',
    SEARCH_QUERY = 'SEARCH_QUERY',
    CURRENT_PAGE = 'CURRENT_PAGE',
    ALL_COUNT = 'ALL_COUNT',
    SORTING = 'SORTING',
    SORTING_FIELD = 'SORTING_FIELD',
    SORTING_MODE = 'SORTING_MODE',
}

export enum fetchingTypes {
    GET_INDICATORS = 'GET_INDICATORS',
    GET_INDICATORS_DEPENDS_COMPETENCE = 'GET_INDICATORS_DEPENDS_COMPETENCE',
    DELETE_INDICATOR = 'DELETE_INDICATOR',
    UPDATE_INDICATOR = 'UPDATE_INDICATOR',
    CREATE_INDICATOR = 'CREATE_INDICATOR',
}

export enum IndicatorsFields {
    ID = 'id',
    TITLE = 'name',
    NUMBER = 'number',
    COMPETENCE = 'competence',
}