
export class RushingQuery {

    options: any = {};
    filter: any = {};

    constructor(builder: RushingQueryBuilder) {
        this.options.sort = { [builder.sort]: 'desc' };

        if (builder.filter) {
            this.filter.Player = builder.filter;
        }
    }

}

export class RushingQueryBuilder {
    public sort: string;
    public filter: RegExp;

    constructor() {
        this.sort = 'Yds';
    }

    setSort(sort: string): RushingQueryBuilder {
        if (sort) {
            this.sort = sort;
        }
        return this;
    }

    setFilter(filter: string): RushingQueryBuilder {
        if (filter) {
            this.filter = new RegExp('\\b' + filter, 'i');
        }
        return this;
    }

    build() {
        return new RushingQuery(this);
    }

}
