create function hfx_get_section(patient_dni character varying) returns character varying
    language plpgsql
as
$$
declare age_p date;
declare age_r interval;
declare wth int;
declare sexR varchar;
declare response varchar;
begin 
	select dob, sex
	into age_p, sexR
	from patient
	where dni = patient_dni;

	age_r := age(age_p);
	wth := extract(year from age_r);

	if not found then
		raise notice 'The film % could not be found', age_p;
	else
		if wth > 18 and sexR='female' then
			response := 'women';
		elseif wth > 18 and sexR='male' then
			response := 'man';
		else
			response := 'children';
		end if;
		return response;
	end if;
end
$$;