create function hfx_get_current_room_capacity(_roomid integer) returns integer
    language plpgsql
as
$$
declare
    room_capacity integer;
    room_beds integer;
begin
    select beds_qty
    into room_capacity
    from room r
    where r.id = _roomId;

    select count(*)
    into room_beds
    from bed b
    where b.room_id = _roomId;

    return room_capacity - room_beds;
end;
$$;