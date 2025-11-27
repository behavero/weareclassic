import React from 'react';
import { useTranslation } from 'react-i18next';
import Image from 'next/image';
import Link from 'next/link';

interface TeamMember {
  id: string;
  name: string;
  role: string;
  image: string;
}

interface Partner {
  id: string;
  name: string;
  type: string;
}

export const TeamRoster: React.FC = () => {
  const { t } = useTranslation();

  const governance: TeamMember[] = [
    {
      id: '1',
      name: 'Vlad Câmpean',
      role: t('team.governance.president'),
      image: '/images/team/vlad-campean.jpg',
    },
    {
      id: '2',
      name: 'Dragoș Popa',
      role: t('team.governance.vicePresident'),
      image: '/images/team/dragos-popa.jpg',
    },
    {
      id: '3',
      name: 'Ion Marina-Uifălean',
      role: t('team.governance.secretary'),
      image: '/images/team/ion-marina.jpg',
    },
  ];

  const partners: Partner[] = [
    { id: '1', name: t('team.partners.partner1'), type: 'Cultural Institution' },
    { id: '2', name: t('team.partners.partner2'), type: 'Music Academy' },
    { id: '3', name: t('team.partners.partner3'), type: 'Community Organization' },
    { id: '4', name: t('team.partners.partner4'), type: 'Corporate Sponsor' },
    { id: '5', name: t('team.partners.partner5'), type: 'Arts Foundation' },
    { id: '6', name: t('team.partners.partner6'), type: 'Media Partner' },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Page Hero */}
      <section className="pt-40 pb-24 bg-gradient-to-b from-beige to-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="font-display text-6xl lg:text-7xl font-bold text-black mb-6">
              {t('team.hero.title')}
            </h1>
            <p className="font-sans text-xl lg:text-2xl text-black/70 leading-relaxed">
              {t('team.hero.subtitle')}
            </p>
          </div>
        </div>
      </section>

      {/* Governance Section */}
      <section className="py-32 bg-white">
        <div className="container-custom">
          <div className="text-center mb-20">
            <h2 className="font-display text-5xl font-bold text-black mb-4">
              {t('team.governance.title')}
            </h2>
            <p className="font-sans text-lg text-black/60 max-w-2xl mx-auto">
              {t('team.governance.description')}
            </p>
          </div>

          {/* Leadership Grid - 3 Columns */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-5xl mx-auto">
            {governance.map((member) => (
              <div
                key={member.id}
                className="group text-center transition-all duration-300 hover:-translate-y-2"
              >
                {/* Circular Portrait */}
                <div className="relative w-64 h-64 mx-auto mb-8 overflow-hidden rounded-full shadow-lg group-hover:shadow-2xl transition-shadow duration-300">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue/5 to-orange/5" />
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover"
                    sizes="256px"
                  />
                </div>

                {/* Member Info */}
                <div>
                  <p className="font-sans text-sm font-semibold text-orange uppercase tracking-wider mb-2">
                    {member.role}
                  </p>
                  <h3 className="font-display text-3xl font-semibold text-black">
                    {member.name}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partners & Community Section */}
      <section className="py-32 bg-beige">
        <div className="container-custom">
          <div className="text-center mb-20">
            <h2 className="font-display text-5xl font-bold text-black mb-4">
              {t('team.partners.title')}
            </h2>
            <p className="font-sans text-lg text-black/60 max-w-3xl mx-auto">
              {t('team.partners.description')}
            </p>
          </div>

          {/* Partners Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {partners.map((partner) => (
              <div
                key={partner.id}
                className="bg-white rounded-xl px-8 py-10 text-center shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                <h3 className="font-display text-2xl font-semibold text-black mb-2">
                  {partner.name}
                </h3>
                <p className="font-sans text-sm text-orange font-medium">
                  {partner.type}
                </p>
              </div>
            ))}
          </div>

          {/* Become a Partner CTA */}
          <div className="mt-20 text-center">
            <p className="font-sans text-lg text-black/70 mb-8">
              {t('team.partners.ctaDescription')}
            </p>
            <Link
              href="/contact"
              className="inline-block px-10 py-5 bg-blue text-white font-sans font-semibold text-lg rounded-md hover:scale-105 hover:shadow-xl transition-all duration-300"
            >
              {t('team.partners.ctaButton')}
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

