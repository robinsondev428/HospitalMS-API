create or replace function hsp_get_clinical_records(_dni varchar)
    returns table (
        id uuid,
        procedure varchar,
        date date
    )
    language plpgsql
as
$$
    begin
        return query
            select
                cr.id,
                mp.name as procedure,
                cr.date::date
            from clinical_record cr
                join medical_procedure mp
                on mp.id = cr."procedureId"
            where cr."patientDni" = _dni;
    end;
$$;