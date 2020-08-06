create function hfx_calculate_departure_date(start_date date, days integer) returns date
    language plpgsql
as
$$
declare new_days int;
            new_month int;
            new_date date;
    begin
        new_days := mod((date_part('day', start_date) +days)::int, 30);
        new_month := ((date_part('month', start_date)) + ((date_part('day', start_date) +days)::int/30));
        new_date := to_date(
            (concat(
            date_part('year',start_date),
            '0',new_month,
            new_days
            )
        ),'YYYYMMDD');
        return new_date;
    end;
$$;