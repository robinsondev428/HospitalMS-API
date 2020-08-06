create function hsp_get_patient_summary(_dni character varying)
    returns TABLE(dni character varying, name character varying, lastname character varying, age integer, phone character varying, province character varying, canton character varying, district character varying, other_signs character varying)
    language plpgsql
as
$$
begin
        return query
            select
                p.dni,
                p.name,
                p.lastname,
                date_part('year',age(p.dob))::int as age,
                p.phone,
                a.province,
                a.canton,
                a.district,
                p.other_signs
            from patient p join address a on a.cp = p.address_cp
            where p.dni = _dni;
    end;
$$;