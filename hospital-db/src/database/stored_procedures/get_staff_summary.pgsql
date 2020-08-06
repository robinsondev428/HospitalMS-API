create function hsp_get_staff_summary(_dni character varying)
    returns TABLE(dni character varying, name character varying, lastname character varying, username character varying, role character varying, age integer, phone character varying, province character varying, canton character varying, district character varying, other_signs character varying)
    language plpgsql
as
$$
begin
        return query
            select
                s.dni,
                s.name,
                s.lastname,
                s.username,
                s.role,
                date_part('year',age(s.dob))::int as age,
                s.phone,
                a.province,
                a.canton,
                a.district,
                s.other_signs
            from staff s join address a on a.cp = s."addressCp"
            where s.dni = _dni;
    end;
$$;