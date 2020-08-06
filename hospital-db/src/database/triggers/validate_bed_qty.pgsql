create function validate_bed_quantity() returns trigger
    language plpgsql
as
$$
declare
    bed_cap int := hfx_get_current_room_capacity(new.room_id);
begin
	if not bed_cap > 0 then
		RAISE EXCEPTION 'The number of spaces available in room % are 0',new.room_id;
	end if;
	return new;
end;
$$;

create trigger insert_bed_in_room_validation
    before insert
    on bed
    for each row
execute procedure validate_bed_quantity();