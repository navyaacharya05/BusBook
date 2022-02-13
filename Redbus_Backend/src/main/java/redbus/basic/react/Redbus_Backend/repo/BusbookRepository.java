package redbus.basic.react.Redbus_Backend.repo;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import redbus.basic.react.Redbus_Backend.entity.Busbook;

@Repository
public interface BusbookRepository extends JpaRepository<Busbook, Integer>
{
	
}
