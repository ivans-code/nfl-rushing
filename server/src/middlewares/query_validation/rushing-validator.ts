
import { ParserUtil } from '../../utils/parser-util';

export const rushingvalidator = (req, res, next) => {
    const sort: string = req.query.sort;

    const sortOptions: string[] = ['Yds', 'Lng', 'TD'];

    if (sort && ParserUtil.isString(sort)) {
        if (sortOptions.indexOf(sort) < 0) {
            throw new Error('Unsupported Query Param');
        }
    }

    next();
};
