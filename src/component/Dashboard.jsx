import React from 'react'
import { BtnSwitch } from 'tracim_lib'
import imgProfil from '../img/imgProfil.png'
// import avatar from '../image/avatar.png'
// import classnames from 'classnames'

const Dashboard = props => {
  return (
    <div className='appdashboard__content'>
      <div className='appdashboard__content__description'>
        <div className='appdashboard__content__description__text'>
          <textarea placeholder='Description du Workspace' />
        </div>
        <div className='appdashboard__content__description__btn d-flex justify-content-end'>
          <button type='button' className='btn btn-outline-primary'>Valider</button>
        </div>
      </div>
      <div className='appdashboard__content__userlist'>
        <div className='appdashboard__content__userlist__title'>
          Listes des membres - modification
        </div>
        <ul className='appdashboard__content__userlist__list'>
          <li className='appdashboard__content__userlist__list__item'>
            <div className='appdashboard__content__userlist__list__item__avatar mr-3'>
              <img src={imgProfil} alt='avatar' />
            </div>
            <div className='appdashboard__content__userlist__list__item__name mr-5'>
              Alexi Cauvin
            </div>
            <div className='appdashboard__content__userlist__list__item__role dropdown mr-auto'>
              <button className='btndropdown dropdown-toggle' type='button' id='dropdownMenuButton' data-toggle='dropdown' aria-haspopup='true' aria-expanded='false'>
                <div className='btndropdown__icon mr-3'>
                  <i className='fa fa-graduation-cap' />
                </div>
                Gestionnaire de contenu
              </button>
              <div className='appdashboard__content__userlist__list__item__role__subdropdown dropdown-menu' aria-labelledby='dropdownMenuButton'>
                <div className='subdropdown__item dropdown-item'>
                  <div className='subdropdown__item__icon'>
                    <i className='fa fa-gavel' />
                  </div>
                  <div className='subdropdown__item__text'>
                    Responsable
                  </div>
                </div>
                <div className='subdropdown__item dropdown-item'>
                  <div className='subdropdown__item__icon'>
                    <i className='fa fa-graduation-cap' />
                  </div>
                  <div className='subdropdown__item__text'>
                    Gestionnaire de contenu
                  </div>
                </div>
                <div className='subdropdown__item dropdown-item'>
                  <div className='subdropdown__item__icon'>
                    <i className='fa fa-pencil' />
                  </div>
                  <div className='subdropdown__item__text'>
                    Contributeur
                  </div>
                </div>
                <div className='subdropdown__item dropdown-item'>
                  <div className='subdropdown__item__icon'>
                    <i className='fa fa-eye' />
                  </div>
                  <div className='subdropdown__item__text'>
                    Lecteur
                  </div>
                </div>
              </div>
            </div>
            <div className='appdashboard__content__userlist__list__item__delete'>
              <i className='fa fa-trash-o' />
            </div>
          </li>
          <li className='appdashboard__content__userlist__list__item'>
            <div className='appdashboard__content__userlist__list__item__avatar mr-3'>
              <img src={imgProfil} alt='avatar' />
            </div>
            <div className='appdashboard__content__userlist__list__item__name mr-5'>
              Alexi Cauvin
            </div>
            <div className='appdashboard__content__userlist__list__item__role dropdown mr-auto'>
              <button className='btndropdown dropdown-toggle' type='button' id='dropdownMenuButton' data-toggle='dropdown' aria-haspopup='true' aria-expanded='false'>
                <div className='btndropdown__icon mr-3'>
                  <i className='fa fa-graduation-cap' />
                </div>
                Gestionnaire de contenu
              </button>
              <div className='appdashboard__content__userlist__list__item__role__subdropdown dropdown-menu' aria-labelledby='dropdownMenuButton'>
                <div className='subdropdown__item dropdown-item'>
                  <div className='subdropdown__item__icon'>
                    <i className='fa fa-gavel' />
                  </div>
                  <div className='subdropdown__item__text'>
                    Responsable
                  </div>
                </div>
                <div className='subdropdown__item dropdown-item'>
                  <div className='subdropdown__item__icon'>
                    <i className='fa fa-graduation-cap' />
                  </div>
                  <div className='subdropdown__item__text'>
                    Gestionnaire de contenu
                  </div>
                </div>
                <div className='subdropdown__item dropdown-item'>
                  <div className='subdropdown__item__icon'>
                    <i className='fa fa-pencil' />
                  </div>
                  <div className='subdropdown__item__text'>
                    Contributeur
                  </div>
                </div>
                <div className='subdropdown__item dropdown-item'>
                  <div className='subdropdown__item__icon'>
                    <i className='fa fa-eye' />
                  </div>
                  <div className='subdropdown__item__text'>
                    Lecteur
                  </div>
                </div>
              </div>
            </div>
            <div className='appdashboard__content__userlist__list__item__delete'>
              <i className='fa fa-trash-o' />
            </div>
          </li>
          <li className='appdashboard__content__userlist__list__item'>
            <div className='appdashboard__content__userlist__list__item__avatar mr-3'>
              <img src={imgProfil} alt='avatar' />
            </div>
            <div className='appdashboard__content__userlist__list__item__name mr-5'>
              Alexi Cauvin
            </div>
            <div className='appdashboard__content__userlist__list__item__role dropdown mr-auto'>
              <button className='btndropdown dropdown-toggle' type='button' id='dropdownMenuButton' data-toggle='dropdown' aria-haspopup='true' aria-expanded='false'>
                <div className='btndropdown__icon mr-3'>
                  <i className='fa fa-graduation-cap' />
                </div>
                Gestionnaire de contenu
              </button>
              <div className='appdashboard__content__userlist__list__item__role__subdropdown dropdown-menu' aria-labelledby='dropdownMenuButton'>
                <div className='subdropdown__item dropdown-item'>
                  <div className='subdropdown__item__icon'>
                    <i className='fa fa-gavel' />
                  </div>
                  <div className='subdropdown__item__text'>
                    Responsable
                  </div>
                </div>
                <div className='subdropdown__item dropdown-item'>
                  <div className='subdropdown__item__icon'>
                    <i className='fa fa-graduation-cap' />
                  </div>
                  <div className='subdropdown__item__text'>
                    Gestionnaire de contenu
                  </div>
                </div>
                <div className='subdropdown__item dropdown-item'>
                  <div className='subdropdown__item__icon'>
                    <i className='fa fa-pencil' />
                  </div>
                  <div className='subdropdown__item__text'>
                    Contributeur
                  </div>
                </div>
                <div className='subdropdown__item dropdown-item'>
                  <div className='subdropdown__item__icon'>
                    <i className='fa fa-eye' />
                  </div>
                  <div className='subdropdown__item__text'>
                    Lecteur
                  </div>
                </div>
              </div>
            </div>
            <div className='appdashboard__content__userlist__list__item__delete'>
              <i className='fa fa-trash-o' />
            </div>
          </li>
          <li className='appdashboard__content__userlist__list__item'>
            <div className='appdashboard__content__userlist__list__item__avatar mr-3'>
              <img src={imgProfil} alt='avatar' />
            </div>
            <div className='appdashboard__content__userlist__list__item__name mr-5'>
              Alexi Cauvin
            </div>
            <div className='appdashboard__content__userlist__list__item__role dropdown mr-auto'>
              <button className='btndropdown dropdown-toggle' type='button' id='dropdownMenuButton' data-toggle='dropdown' aria-haspopup='true' aria-expanded='false'>
                <div className='btndropdown__icon mr-3'>
                  <i className='fa fa-graduation-cap' />
                </div>
                Gestionnaire de contenu
              </button>
              <div className='appdashboard__content__userlist__list__item__role__subdropdown dropdown-menu' aria-labelledby='dropdownMenuButton'>
                <div className='subdropdown__item dropdown-item'>
                  <div className='subdropdown__item__icon'>
                    <i className='fa fa-gavel' />
                  </div>
                  <div className='subdropdown__item__text'>
                    Responsable
                  </div>
                </div>
                <div className='subdropdown__item dropdown-item'>
                  <div className='subdropdown__item__icon'>
                    <i className='fa fa-graduation-cap' />
                  </div>
                  <div className='subdropdown__item__text'>
                    Gestionnaire de contenu
                  </div>
                </div>
                <div className='subdropdown__item dropdown-item'>
                  <div className='subdropdown__item__icon'>
                    <i className='fa fa-pencil' />
                  </div>
                  <div className='subdropdown__item__text'>
                    Contributeur
                  </div>
                </div>
                <div className='subdropdown__item dropdown-item'>
                  <div className='subdropdown__item__icon'>
                    <i className='fa fa-eye' />
                  </div>
                  <div className='subdropdown__item__text'>
                    Lecteur
                  </div>
                </div>
              </div>
            </div>
            <div className='appdashboard__content__userlist__list__item__delete'>
              <i className='fa fa-trash-o' />
            </div>
          </li>
          <li className='appdashboard__content__userlist__list__item'>
            <div className='appdashboard__content__userlist__list__item__avatar mr-3'>
              <img src={imgProfil} alt='avatar' />
            </div>
            <div className='appdashboard__content__userlist__list__item__name mr-5'>
              Alexi Cauvin
            </div>
            <div className='appdashboard__content__userlist__list__item__role dropdown mr-auto'>
              <button className='btndropdown dropdown-toggle' type='button' id='dropdownMenuButton' data-toggle='dropdown' aria-haspopup='true' aria-expanded='false'>
                <div className='btndropdown__icon mr-3'>
                  <i className='fa fa-graduation-cap' />
                </div>
                Gestionnaire de contenu
              </button>
              <div className='appdashboard__content__userlist__list__item__role__subdropdown dropdown-menu' aria-labelledby='dropdownMenuButton'>
                <div className='subdropdown__item dropdown-item'>
                  <div className='subdropdown__item__icon'>
                    <i className='fa fa-gavel' />
                  </div>
                  <div className='subdropdown__item__text'>
                    Responsable
                  </div>
                </div>
                <div className='subdropdown__item dropdown-item'>
                  <div className='subdropdown__item__icon'>
                    <i className='fa fa-graduation-cap' />
                  </div>
                  <div className='subdropdown__item__text'>
                    Gestionnaire de contenu
                  </div>
                </div>
                <div className='subdropdown__item dropdown-item'>
                  <div className='subdropdown__item__icon'>
                    <i className='fa fa-pencil' />
                  </div>
                  <div className='subdropdown__item__text'>
                    Contributeur
                  </div>
                </div>
                <div className='subdropdown__item dropdown-item'>
                  <div className='subdropdown__item__icon'>
                    <i className='fa fa-eye' />
                  </div>
                  <div className='subdropdown__item__text'>
                    Lecteur
                  </div>
                </div>
              </div>
            </div>
            <div className='appdashboard__content__userlist__list__item__delete'>
              <i className='fa fa-trash-o' />
            </div>
          </li>
        </ul>
        <div className='appdashboard__content__userlist__adduser'>
          <div className='appdashboard__content__userlist__adduser__button'>
            <div className='appdashboard__content__userlist__adduser__button__avatar'>
              <div className='appdashboard__content__userlist__adduser__button__avatar__icon'>
                <i className='fa fa-plus' />
              </div>
            </div>
            <div className='appdashboard__content__userlist__adduser__button__text'>
               Ajouter un membre
            </div>
          </div>
        </div>
        <form className='appdashboard__content__userlist__form d-none'>
          <div className='dashboard__memberlist__addmember__close d-flex justify-content-end'>
            <i className='fa fa-times' />
          </div>
          <label className='dashboard__memberlist__addmember__label' htmlFor='addmember'>Indiquer le nom de l'utilisateur</label>
          <input type='text' id='addmember' className='dashboard__memberlist__addmember__name form-control' placeholder='Name' />
          <div className='dashboard__memberlist__addmember__role'>
            <div className='dashboard__memberlist__addmember__role__dropdown dropdown'>
              <button className='dashboard__memberlist__addmember__role__dropdown__button btn btn-outline-primary dropdown-toggle' type='button' id='dropdownMenuButton' data-toggle='dropdown' aria-haspopup='true' aria-expanded='false'>
                Rôle du membre
              </button>
              <div className='dashboard__memberlist__addmember__role__dropdown__submenu dropdown-menu'>
                <div className='dashboard__memberlist__addmember__role__dropdown__submenu__item dropdown-item'>
                  <div className='dashboard__memberlist__addmember__role__dropdown__submenu__item__icon'>
                    <i className='fa fa-eye' />
                  </div>
                  Lecteur
                </div>
                <div className='dashboard__memberlist__addmember__role__dropdown__submenu__item dropdown-item'>
                  <div className='dashboard__memberlist__addmember__role__dropdown__submenu__item__icon'>
                    <i className='fa fa-pencil' />
                  </div>
                  contributeur
                </div>
                <div className='dashboard__memberlist__addmember__role__dropdown__submenu__item dropdown-item'>
                  <div className='dashboard__memberlist__addmember__role__dropdown__submenu__item__icon'>
                    <i className='fa fa-graduation-cap' />
                  </div>
                  Gestionnaire de contenu
                </div>
                <div className='dashboard__memberlist__addmember__role__dropdown__submenu__item dropdown-item'>
                  <div className='dashboard__memberlist__addmember__role__dropdown__submenu__item__icon'>
                    <i className='fa fa-gavel' />
                  </div>
                  Responsable
                </div>
              </div>
            </div>
          </div>
          <div className='dashboard__memberlist__addmember__submitbtn'>
            <button type='submit' className='btn btn-outline-primary'>Valider</button>
          </div>
        </form>
      </div>
      <div className='appdashboard__content__functionality'>
        <div className='appdashboard__content__functionality__title'>
          Liste des fonctionnalités
        </div>
        <div className='appdashboard__content__functionality__desc'>
          Liste des fonctionnalités présentes sur Tracim que vous pouvez désactiver :
        </div>
        <ul className='appdashboard__content__functionality__list'>
          <li className='appdashboard__content__functionality__list__item'>
            <div className='item__text'>
              Calendrier de l'espace de travail
            </div>
            <div className='item__btnswitch'>
              <BtnSwitch />
            </div>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Dashboard
