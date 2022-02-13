package redbus.basic.react.Redbus_Backend.repo;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import redbus.basic.react.Redbus_Backend.entity.Passengers;

@Repository
public interface PassengerRepository extends JpaRepository<Passengers,Integer>
{

}
