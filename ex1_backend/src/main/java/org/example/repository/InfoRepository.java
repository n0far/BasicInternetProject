package org.example.repository;
import org.springframework.data.repository.CrudRepository;
import org.example.model.Info;

public interface InfoRepository extends CrudRepository<Info, String> {
}
