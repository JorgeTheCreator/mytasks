import { DataSource } from '@angular/cdk/collections';
import { MatPaginator, MatSort } from '@angular/material';
import { map } from 'rxjs/operators';
import { Observable, of as observableOf, merge } from 'rxjs';

// TODO: Replace this with your own data model type
export interface DataTableItem {
  id: number;
  quoteType: string;
  task: string;
  dueDate: string;
  taskType: string;
}

// TODO: replace this with real data from your application
const TASK_RECORD: DataTableItem[] = [
  {
    id: 1,
    quoteType: 'AYR',
    task:
      'DYC-Quote ID 145, Due Date Dec 23 2015,Customer-Summitork Technologies Inc.',
    dueDate: '12/23/2015 10:28am',
    taskType: 'Follow-up'
  },
  {
    id: 2,
    quoteType: 'EYR',
    task:
      'DYA-Quote ID 145, Due Date Dec 23 2015,Customer-Summitork Technologies Inc.',
    dueDate: '12/23/2015 10:28am',
    taskType: 'Follow-up'
  },
  {
    id: 3,
    quoteType: 'FYR',
    task:
      'DYR-Quote ID 145, Due Date Dec 23 2015,Customer-Summitork Technologies Inc.',
    dueDate: '12/23/2015 10:28am',
    taskType: 'Follow-up'
  },
  {
    id: 4,
    quoteType: 'GYR',
    task:
      'DYB-Quote ID 145, Due Date Dec 23 2015,Customer-Summitork Technologies Inc.',
    dueDate: '12/23/2015 10:28am',
    taskType: 'Follow-up'
  },
  {
    id: 5,
    quoteType: 'HYR',
    task:
      'DYR-Quote ID 145, Due Date Dec 23 2015,Customer-Summitork Technologies Inc.',
    dueDate: '12/23/2015 10:28am',
    taskType: 'Follow-up'
  },
  {
    id: 6,
    quoteType: 'IYR',
    task:
      'DYR-Quote ID 145, Due Date Dec 23 2015,Customer-Summitork Technologies Inc.',
    dueDate: '12/23/2015 10:28am',
    taskType: 'Follow-up'
  },
  {
    id: 7,
    quoteType: 'JYR',
    task:
      'DYX-Quote ID 145, Due Date Dec 23 2015,Customer-Summitork Technologies Inc.',
    dueDate: '12/23/2015 10:28am',
    taskType: 'Follow-up'
  },
  {
    id: 8,
    quoteType: 'DYR',
    task:
      'DYR-Quote ID 145, Due Date Dec 23 2015,Customer-Summitork Technologies Inc.',
    dueDate: '12/23/2015 10:28am',
    taskType: 'Follow-up'
  },
  {
    id: 9,
    quoteType: 'DYR',
    task:
      'DYR-Quote ID 145, Due Date Dec 23 2015,Customer-Summitork Technologies Inc.',
    dueDate: '12/23/2015 10:28am',
    taskType: 'Follow-up'
  },
  {
    id: 10,
    quoteType: 'DYR',
    task:
      'DYR-Quote ID 145, Due Date Dec 23 2015,Customer-Summitork Technologies Inc.',
    dueDate: '12/23/2015 10:28am',
    taskType: 'Follow-up'
  },
  {
    id: 11,
    quoteType: 'DYR',
    task:
      'DYY-Quote ID 145, Due Date Dec 23 2015,Customer-Summitork Technologies Inc.',
    dueDate: '12/23/2015 10:28am',
    taskType: 'Follow-up'
  },
  {
    id: 12,
    quoteType: 'DYR',
    task:
      'DYR-Quote ID 145, Due Date Dec 23 2015,Customer-Summitork Technologies Inc.',
    dueDate: '12/23/2015 10:28am',
    taskType: 'Fixed-work'
  },
  {
    id: 13,
    quoteType: 'DYR',
    task:
      'DYH-Quote ID 145, Due Date Dec 23 2015,Customer-Summitork Technologies Inc.',
    dueDate: '12/23/2015 10:28am',
    taskType: 'Follow-up'
  },
  {
    id: 14,
    quoteType: 'DYR',
    task:
      'DYR-Quote ID 145, Due Date Dec 23 2015,Customer-Summitork Technologies Inc.',
    dueDate: '12/23/2015 10:28am',
    taskType: 'Follow-up'
  },
  {
    id: 15,
    quoteType: 'DYR',
    task:
      'DYW-Quote ID 145, Due Date Dec 23 2015,Customer-Summitork Technologies Inc.',
    dueDate: '12/23/2015 10:28am',
    taskType: 'Follow-up'
  },
  {
    id: 16,
    quoteType: 'DYR',
    task:
      'DYR-Quote ID 145, Due Date Dec 23 2015,Customer-Summitork Technologies Inc.',
    dueDate: '12/23/2015 10:28am',
    taskType: 'Follow-up'
  },
  {
    id: 17,
    quoteType: 'DYR',
    task:
      'DYR-Quote ID 145, Due Date Dec 23 2015,Customer-Summitork Technologies Inc.',
    dueDate: '12/23/2015 10:28am',
    taskType: 'Follow-up'
  },
  {
    id: 18,
    quoteType: 'DYU',
    task:
      'DYR-Quote ID 145, Due Date Dec 23 2015,Customer-Summitork Technologies Inc.',
    dueDate: '12/23/2015 10:28am',
    taskType: 'Follow-up'
  },
  {
    id: 19,
    quoteType: 'DYR',
    task:
      'DYR-Quote ID 145, Due Date Dec 23 2015,Customer-Summitork Technologies Inc.',
    dueDate: '12/23/2015 10:28am',
    taskType: 'Follow-up'
  },
  {
    id: 20,
    quoteType: 'DYR',
    task:
      'DYD-Quote ID 145, Due Date Dec 23 2015,Customer-Summitork Technologies Inc.',
    dueDate: '12/23/2015 10:28am',
    taskType: 'Follow-up'
  },
  {
    id: 21,
    quoteType: 'DYR',
    task:
      'DYE-Quote ID 145, Due Date Dec 23 2015,Customer-Summitork Technologies Inc.',
    dueDate: '12/23/2015 10:28am',
    taskType: 'Follow-up'
  },
  {
    id: 22,
    quoteType: 'DYR',
    task:
      'DYF-Quote ID 145, Due Date Dec 23 2015,Customer-Summitork Technologies Inc.',
    dueDate: '12/23/2015 10:28am',
    taskType: 'Follow-up'
  },
  {
    id: 23,
    quoteType: 'DYR',
    task:
      'DYG-Quote ID 145, Due Date Dec 23 2015,Customer-Summitork Technologies Inc.',
    dueDate: '12/23/2015 10:28am',
    taskType: 'Follow-up'
  },
  {
    id: 24,
    quoteType: 'DYR',
    task:
      'DYR-Quote ID 145, Due Date Dec 23 2015,Customer-Summitork Technologies Inc.',
    dueDate: '12/23/2015 10:28am',
    taskType: 'Follow-up'
  },
  {
    id: 25,
    quoteType: 'DYJ',
    task:
      'DYR-Quote ID 145, Due Date Dec 23 2015,Customer-Summitork Technologies Inc.',
    dueDate: '12/23/2015 10:28am',
    taskType: 'Follow-up'
  },
  {
    id: 26,
    quoteType: 'DYK',
    task:
      'DYR-Quote ID 145, Due Date Dec 23 2015,Customer-Summitork Technologies Inc.',
    dueDate: '12/23/2015 10:28am',
    taskType: 'Follow-up'
  },
  {
    id: 27,
    quoteType: 'DYR',
    task:
      'DYR-Quote ID 145, Due Date Dec 23 2015,Customer-Summitork Technologies Inc.',
    dueDate: '12/23/2015 10:28am',
    taskType: 'Follow-up'
  },
  {
    id: 28,
    quoteType: 'DYL',
    task:
      'DYR-Quote ID 145, Due Date Dec 23 2015,Customer-Summitork Technologies Inc.',
    dueDate: '12/23/2015 10:28am',
    taskType: 'Follow-up'
  },
  {
    id: 29,
    quoteType: 'DYI',
    task:
      'DYR-Quote ID 145, Due Date Dec 23 2015,Customer-Summitork Technologies Inc.',
    dueDate: '12/23/2015 10:28am',
    taskType: 'Fixed-work'
  },
  {
    id: 30,
    quoteType: 'DYJ',
    task:
      'DYR-Quote ID 145, Due Date Dec 23 2015,Customer-Summitork Technologies Inc.',
    dueDate: '2/23/2015 10:28am',
    taskType: 'Follow-up'
  },
  {
    id: 31,
    quoteType: 'DYR',
    task:
      'DYI-Quote ID 145, Due Date Dec 23 2015,Customer-Summitork Technologies Inc.',
    dueDate: '1/23/2013 11:28am',
    taskType: 'Follow-up'
  },
  {
    id: 32,
    quoteType: 'DYR',
    task:
      'DYR-Quote ID 145, Due Date Dec 23 2015,Customer-Summitork Technologies Inc.',
    dueDate: '5/23/2018 10:28am',
    taskType: 'Follow-up'
  },
  {
    id: 33,
    quoteType: 'DYR',
    task:
      'DYR-Quote ID 145, Due Date Dec 23 2015,Customer-Summitork Technologies Inc.',
    dueDate: '12/23/2018 10:28am',
    taskType: 'Follow-up'
  },
  {
    id: 34,
    quoteType: 'DYR',
    task:
      'DYR-Quote ID 145, Due Date Dec 23 2015,Customer-Summitork Technologies Inc.',
    dueDate: '12/23/2018 10:28am',
    taskType: 'Follow-up'
  },
  {
    id: 35,
    quoteType: 'DYR',
    task:
      'DYR-Quote ID 145, Due Date Dec 23 2015,Customer-Summitork Technologies Inc.',
    dueDate: '5/23/2018 10:28am',
    taskType: 'Follow-up'
  },
  {
    id: 36,
    quoteType: 'DYR',
    task:
      'DYR-Quote ID 145, Due Date Dec 23 2015,Customer-Summitork Technologies Inc.',
    dueDate: '12/23/2015 10:28am',
    taskType: 'Follow-up'
  },
  {
    id: 37,
    quoteType: 'DYR',
    task:
      'DYR-Quote ID 145, Due Date Dec 23 2015,Customer-Summitork Technologies Inc.',
    dueDate: '7/23/2015 10:28am',
    taskType: 'Follow-up'
  },
  {
    id: 38,
    quoteType: 'DYR',
    task:
      'DYR-Quote ID 145, Due Date Dec 23 2015,Customer-Summitork Technologies Inc.',
    dueDate: '4/3/2015 9:28am',
    taskType: 'Follow-up'
  },
  {
    id: 39,
    quoteType: 'DYR',
    task:
      'DYR-Quote ID 145, Due Date Dec 23 2015,Customer-Summitork Technologies Inc.',
    dueDate: '12/23/2015 10:28am',
    taskType: 'Fixed-work'
  },
  {
    id: 40,
    quoteType: 'MYR',
    task:
      'DYR-Quote ID 145, Due Date Dec 23 2015,Customer-Summitork Technologies Inc.',
    dueDate: '12/23/2015 10:28pm',
    taskType: 'Follow-up'
  },
  {
    id: 41,
    quoteType: 'ZYR',
    task:
      'DYR-Quote ID 145, Due Date Dec 23 2015,Customer-Summitork Technologies Inc.',
    dueDate: '12/23/2015 10:28am',
    taskType: 'Follow-up'
  },
  {
    id: 42,
    quoteType: 'DYR',
    task:
      'DYR-Quote ID 145, Due Date Dec 23 2015,Customer-Summitork Technologies Inc.',
    dueDate: '2/23/2015 2:28pm',
    taskType: 'Follow-up'
  },
  {
    id: 43,
    quoteType: 'UYR',
    task:
      'DYR-Quote ID 145, Due Date Dec 23 2015,Customer-Summitork Technologies Inc.',
    dueDate: '12/23/2015 10:28am',
    taskType: 'Fixed-work'
  },
  {
    id: 44,
    quoteType: 'DYR',
    task:
      'DYR-Quote ID 145, Due Date Dec 23 2015,Customer-Summitork Technologies Inc.',
    dueDate: '12/23/2015 10:28am',
    taskType: 'Follow-up'
  },
  {
    id: 45,
    quoteType: 'CYR',
    task:
      'DYR-Quote ID 145, Due Date Dec 23 2015,Customer-Summitork Technologies Inc.',
    dueDate: '6/13/2016 11:28am',
    taskType: 'Follow-up'
  },
  {
    id: 46,
    quoteType: 'DYR',
    task:
      'DYR-Quote ID 145, Due Date Dec 23 2015,Customer-Summitork Technologies Inc.',
    dueDate: '4/23/2015 10:28am',
    taskType: 'Follow-up'
  },
  {
    id: 47,
    quoteType: 'BYR',
    task:
      'DYR-Quote ID 145, Due Date Dec 23 2015,Customer-Summitork Technologies Inc.',
    dueDate: '12/23/2015 10:28am',
    taskType: 'Follow-up'
  },
  {
    id: 48,
    quoteType: 'AYR',
    task:
      'DYR-Quote ID 145, Due Date Dec 23 2015,Customer-Summitork Technologies Inc.',
    dueDate: '12/23/2015 10:28am',
    taskType: 'Follow-up'
  },
  {
    id: 49,
    quoteType: 'RYR',
    task:
      'DYR-Quote ID 145, Due Date Dec 23 2015,Customer-Summitork Technologies Inc.',
    dueDate: '12/23/2015 10:28am',
    taskType: 'Cancel'
  },
  {
    id: 50,
    quoteType: 'DYR',
    task:
      'DYR-Quote ID 145, Due Date Dec 23 2015,Customer-Summitork Technologies Inc.',
    dueDate: '12/23/2015 10:28am',
    taskType: 'Fixed-work'
  },
  {
    id: 51,
    quoteType: 'DYR',
    task:
      'DYR-Quote ID 145, Due Date Dec 23 2015,Customer-Summitork Technologies Inc.',
    dueDate: '2/23/2015 10:28am',
    taskType: 'Cancel'
  },
  {
    id: 52,
    quoteType: 'DYR',
    task:
      'DYR-Quote ID 145, Due Date Dec 23 2015,Customer-Summitork Technologies Inc.',
    dueDate: '5/23/2015 10:28am',
    taskType: 'Follow-up'
  }
];

/**
 * Data source for the DataTable view. This class should
 * encapsulate all logic for fetching and manipulating the displayed data
 * (including sorting, pagination, and filtering).
 */
export class DataTableDataSource extends DataSource<DataTableItem> {
  data: DataTableItem[] = TASK_RECORD;

  constructor(private paginator: MatPaginator, private sort: MatSort) {
    super();
  }

  /**
   * Connect this data source to the table. The table will only update when
   * the returned stream emits new items.
   * @returns A stream of the items to be rendered.
   */
  connect(): Observable<DataTableItem[]> {
    // Combine everything that affects the rendered data into one update
    // stream for the data-table to consume.
    const dataMutations = [
      observableOf(this.data),
      this.paginator.page,
      this.sort.sortChange
    ];

    // Set the paginator's length
    this.paginator.length = this.data.length;

    return merge(...dataMutations).pipe(
      map(() => {
        return this.getPagedData(this.getSortedData([...this.data]));
      })
    );
  }

  /**
   *  Called when the table is being destroyed. Use this function, to clean up
   * any open connections or free any held resources that were set up during connect.
   */
  disconnect() {}

  /**
   * Paginate the data (client-side). If you're using server-side pagination,
   * this would be replaced by requesting the appropriate data from the server.
   */
  private getPagedData(data: DataTableItem[]) {
    const startIndex = this.paginator.pageIndex * this.paginator.pageSize;
    return data.splice(startIndex, this.paginator.pageSize);
  }

  /**
   * Sort the data (client-side). If you're using server-side sorting,
   * this would be replaced by requesting the appropriate data from the server.
   */
  private getSortedData(data: DataTableItem[]) {
    if (!this.sort.active || this.sort.direction === '') {
      return data;
    }

    return data.sort((a, b) => {
      const isAsc = this.sort.direction === 'asc';
      switch (this.sort.active) {
        case 'quoteType':
          return compare(a.quoteType, b.quoteType, isAsc);
        case 'taskType':
          return compare(a.taskType, b.taskType, isAsc);
        case 'dueDate':
          return compare(a.dueDate, b.dueDate, isAsc);
        case 'task':
          return compare(a.task, b.task, isAsc);
        case 'id':
          return compare(+a.id, +b.id, isAsc);
        default:
          return 0;
      }
    });
  }
}

/** Simple sort comparator for example ID/Name columns (for client-side sorting). */
function compare(a, b, isAsc) {
  return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
}
