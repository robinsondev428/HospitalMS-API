create function hfx_get_beds_available_qty(room_ integer, start_date date, end_date date) returns integer
    language plpgsql
as
$$
    -- This function returns the number of beds available
    -- in a room in a time interval.
    declare
        room_capacity int;
        reserved_beds int;
    begin

        -- Get the total beds in the room
        select r.beds_qty
        into room_capacity
        from room r
        where r.id = room_;

        -- Get the beds occupied in the time range.
        select count(*)
        into reserved_beds
        from reservation r
            inner join  bed b on r.bed_id = b.id
        where
            b.room_id = room_ and
            (r.arrival_date between start_date::date and end_date::date) or
            (r.departure_date between start_date::date and end_date::date);

        -- Through the subtraction returns the available beds
        return room_capacity-reserved_beds;
    end;
$$;