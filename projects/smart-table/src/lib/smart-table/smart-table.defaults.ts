import { SmartTableOptions } from './smart-table.types';

export const SMARTTABLE_DEFAULT_OPTIONS: SmartTableOptions = {
    defaultSortOrder: { key: 'id', order: 'asc' },
    loadDataMessage: 'De rijen worden geladen...',
    noDataMessage: 'Er zijn geen rijen die aan de criteria voldoen.',
    pageSize: 15,
    pageSizeOptions: [5, 10, 15, 20, 25, 30],
    resetSortOrderOnFilter: false
};
